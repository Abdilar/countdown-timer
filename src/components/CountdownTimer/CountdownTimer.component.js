import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import useState from '../../hooks/setState.hook';
import {TYPE} from '../../config/variables';
import {getLastIndex, getTime, isFunction, randomNumber} from '../../helper/utils';
import {Symbol, Time} from '../'

import './CountdownTimer.style.scss';

const CountdownTimer = (props) => {
  const [hours, setHours, getHours] = useState(0);
  const [minutes, setMinutes, getMinutes] = useState(0);
  const [seconds, setSeconds, getSeconds] = useState(0);
  const [symbol, setSymbol] = useState({});
  const intervalId = useRef(null);
  const {
    symbolClass = '',
    wrapperClass = ''
  } = props.className;

  useEffect(() => {
    didMount();
    return willUnmount;
  }, []);

  useEffect(() => {
    clearInterval(intervalId.current);
    initialTimer();
  }, [props.time]);

  useEffect(() => {
    allocateSymbol();
  }, [props.format]);

  const didMount = () => {
    initialTimer();
    allocateSymbol();
  };

  const willUnmount = () => {
    clearInterval(intervalId.current);
  };

  const initialTimer = () => {
    const {hours, minutes, seconds} = getTime(props.time - 1);

    setSeconds(seconds);
    setMinutes(minutes);
    setHours(hours);
    start();
  };

  const start = () => {
    intervalId.current = setInterval(async () => {
      const hours = await getHours();
      const minutes = await getMinutes();
      const seconds = await getSeconds();
      if (seconds) {
        setSeconds(seconds - 1);
      } else if (minutes) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else {
        clearInterval(intervalId.current);
        isFunction(props.onComplete) && props.onComplete();
      }
    }, 1000);
  };

  const allocateSymbol = () => {
    let data = props.format.toLowerCase().split(TYPE.HOURS);
    const hours = data.length !== 1 ? data[0] : "";
    data = data[getLastIndex(data)].split(TYPE.MINUTES);
    const minutes = data.length !== 1 ? data[0] : "";
    data = data[getLastIndex(data)].split(TYPE.SECONDS);
    const seconds = data.length !== 1 ? data[0] : "";
    const afterSeconds = data[getLastIndex(data)];
    setSymbol({hours,minutes,seconds,afterSeconds});
  };

  return (
    <div id={props.id} className={`countdown-timer ${wrapperClass}`}>
      <Symbol symbol={symbol.hours} symbolClass={symbolClass} />
      <Time type={TYPE.HOURS} number={hours} {...props} />
      <Symbol symbol={symbol.minutes} symbolClass={symbolClass} />
      <Time type={TYPE.MINUTES} number={minutes} {...props} />
      <Symbol symbol={symbol.seconds} symbolClass={symbolClass} />
      <Time type={TYPE.SECONDS} number={seconds} {...props} />
      <Symbol symbol={symbol.afterSeconds} symbolClass={symbolClass} />
    </div>
  )
};

CountdownTimer.defaultProps = {
  className: {},
  format: "HH:MM:SS",
  id: `sakit-sa-countdown-timer-${randomNumber(10000)}`,
};

CountdownTimer.propTypes = {
  className: PropTypes.object,
  format: PropTypes.string,
  id: PropTypes.string,
  onComplete: PropTypes.func,
  time: PropTypes.number.isRequired
};

export default CountdownTimer;
