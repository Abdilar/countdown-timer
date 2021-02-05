import React from 'react';
import CountdownTimer from '../index';

export default {
  title: 'Format prop',
  component: CountdownTimer
}

const customClassName = {
  symbolClass: 'countdown-timer__symbol'
}

export const doubleDigit = () => <CountdownTimer time={3770} format="HH:MM:SS" />;
export const singleDigit = () => <CountdownTimer time={3770} format="hh:mm:ss" />;
export const customFormat = () => <CountdownTimer className={customClassName} time={3770} format="HHh MMm SSs"/>;

doubleDigit.storyName = "Leading zero for single-digit";
singleDigit.storyName = "No leading zero for single-digit";
customFormat.storyName = "Custom format";
