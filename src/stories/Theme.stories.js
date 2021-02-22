import React from 'react';
import CountdownTimer from '../index';

import "./Story.style.scss";

export default {
  title: "Theme",
  component: CountdownTimer
}

export const className = () => {
  const customClass = {
    wrapperClass: "color-black",
    symbolClass: "color-white",
    digitClass: "color-yellow",
    hourClass: "color-red",
    minuteClass: "color-blue",
    secondClass: "color-orange",
    hourWrapperClass: "color-green",
    minuteWrapperClass: "color-green",
    secondWrapperClass: "color-green",
  };

  return <CountdownTimer className={customClass} time={40504} />
}

export const newStyle = () => {
  const customClass = {
    digitClass: "large-text",
    symbolClass: "symbol",
    hourWrapperClass: "digit-wrapper",
    minuteWrapperClass: "digit-wrapper",
    secondWrapperClass: "digit-wrapper",
  };

  return <CountdownTimer className={customClass} format="HHhoure MMminute SSsecond" time={40504} />
}
