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
    hoursClass: "color-red",
    minuteClass: "color-blue",
    secondClass: "color-orange",
  };

  return <CountdownTimer className={customClass} time={40504} />
}
