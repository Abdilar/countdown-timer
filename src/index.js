import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import useState from './hooks/setState.hook';
import {getLastIndex, getZeroFormat, getTime, isEmptyString, isFunction} from './helper/utils';

import './styles.style.scss';

const TYPE = {
  HOURS: "hh",
  MINUTES: "mm",
  SECONDS: "ss"
};

const renderTime = ({format = "", className}, type, number) => {
  if (!format.toLowerCase().includes(type)) return null;
  const { digitClass = '', hoursClass = '', minuteClass = '', secondClass = '' } = className;
  const customClass = type === TYPE.HOURS ?
    hoursClass :
    type === TYPE.MINUTES ?
      minuteClass :
      type === TYPE.SECONDS ?
        secondClass :
        '';

  return (
    <span className={`${digitClass} ${customClass}`}>{format.includes(type) ? number : getZeroFormat(number)}</span>
  )
};

const renderSymbol = (symbol, symbolClass) => !isEmptyString(symbol) ? <span className={symbolClass}>{symbol}</span> : null;

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
        isFunction(props.onStop) && props.onStop();
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
    <div className={`countdown-timer ${wrapperClass}`}>
      {renderSymbol(symbol.hours, symbolClass)}
      {renderTime(props, TYPE.HOURS, hours)}
      {renderSymbol(symbol.minutes, symbolClass)}
      {renderTime(props, TYPE.MINUTES, minutes)}
      {renderSymbol(symbol.seconds, symbolClass)}
      {renderTime(props, TYPE.SECONDS, seconds)}
      {renderSymbol(symbol.afterSeconds, symbolClass)}
    </div>
  )
};

export default CountdownTimer;

CountdownTimer.defaultProps = {
  className: {},
  format: "HH:MM:SS"
};

CountdownTimer.propTypes = {
  className: PropTypes.object,
  format: PropTypes.string,
  onStop: PropTypes.func,
  time: PropTypes.number.isRequired
};
