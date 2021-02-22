import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useState from '../../hooks/setState.hook';
import { TYPE } from '../../config/variables';
import { getTime, isFunction, randomNumber } from '../../utils/functions';
import { Symbol, Time } from '../';

import './CountdownTimer.style.scss';

const CountdownTimer = (props) => {
  const [hours, setHours, getHours] = useState(0);
  const [minutes, setMinutes, getMinutes] = useState(0);
  const [seconds, setSeconds, getSeconds] = useState(0);
  const [symbol, setSymbol] = useState({});
  const [types, setTypes] = useState([]);
  const intervalId = useRef(null);
  const {
    symbolClass = '',
    wrapperClass = '',
    hourWrapperClass = '',
    minuteWrapperClass = '',
    secondWrapperClass = ''
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
    allocateTime();
  }, [props.format]);

  const didMount = () => {
    initialTimer();
    allocateSymbol();
    allocateTime();
  };

  const willUnmount = () => {
    clearInterval(intervalId.current);
  };

  const initialTimer = () => {
    const { hours, minutes, seconds } = getTime(props.time - 1);

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
    const splitChar = new RegExp(`${TYPE.SECONDS}|${TYPE.MINUTES}|${TYPE.HOURS}`);
    const splitSymbols = props.format.toLowerCase().split(splitChar);

    setSymbol({
      firstSymbol: splitSymbols[0],
      secondSymbol: splitSymbols[1],
      thirdSymbol: splitSymbols[2],
      forthSymbol: splitSymbols[3]
    });
  };

  const allocateTime = () => {
    const format = props.format.toLowerCase();
    const types = [];
    let foundedIndex = -1;
    props.format.toLowerCase().split('').forEach((character, index) => {
      if (index === foundedIndex) return;
      if(character === 'h') {
        format[index + 1] === 'h' && (types.push(TYPE.HOURS));
        foundedIndex = index + 1;
      }
      if (character === 'm') {
        format[index + 1] === 'm' && (types.push(TYPE.MINUTES));
        foundedIndex = index + 1;
      }
      if (character === 's') {
        format[index + 1] === 's' && (types.push(TYPE.SECONDS));
        foundedIndex = index + 1;
      }
    });
    const set = new Set(types);
    setTypes([...Array.from(set)]);
  };

  const getNumber = (type) => {
    return type === TYPE.HOURS ?
      hours :
      type === TYPE.MINUTES ?
        minutes :
        type === TYPE.SECONDS ?
          seconds : 0;
  }

  const getWrapperClass = (type) => {
    return type === TYPE.HOURS ?
      hourWrapperClass :
      type === TYPE.MINUTES ?
        minuteWrapperClass :
        type === TYPE.SECONDS ?
          secondWrapperClass : '';
  }

  return (
    <span id={props.id} className={`countdown-timer ${wrapperClass}`}>
      <Symbol symbol={symbol.firstSymbol} symbolClass={symbolClass} />
      <span className={getWrapperClass(types[0])}>
        <Time type={types[0]} number={getNumber(types[0])} {...props} />
        <Symbol symbol={symbol.secondSymbol} symbolClass={symbolClass} />
      </span>
      <span className={getWrapperClass(types[1])}>
        <Time type={types[1]} number={getNumber(types[1])} {...props} />
        <Symbol symbol={symbol.thirdSymbol} symbolClass={symbolClass} />
      </span>
      <span className={getWrapperClass(types[2])}>
        <Time type={types[2]} number={getNumber(types[2])} {...props} />
        <Symbol symbol={symbol.forthSymbol} symbolClass={symbolClass} />
      </span>
    </span>
  )
};

CountdownTimer.defaultProps = {
  className: {},
  format: 'HH:MM:SS',
  id: `sakit-sa-countdown-timer-${randomNumber(10000)}`
}

CountdownTimer.propTypes = {
  className: PropTypes.object,
  format: PropTypes.string,
  id: PropTypes.string,
  onComplete: PropTypes.func,
  time: PropTypes.number.isRequired
}

export default CountdownTimer;
