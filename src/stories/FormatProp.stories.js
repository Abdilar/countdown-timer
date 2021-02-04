import React from 'react';
import {text} from '@storybook/addon-knobs'
import CountdownTimer from '../index';

export default {
  title: 'Format prop',
  component: CountdownTimer
}

const customClassName = {
  symbolClass: 'countdown-timer__symbol'
}

export const doubleDigit = () => <CountdownTimer time={3770} format={text('Format', "HH:MM:SS")} />;
export const singleDigit = () => <CountdownTimer time={3770} format={text('Format', "hh:mm:ss")} />;
export const customFormat = () => <CountdownTimer className={customClassName} time={3770} format={text('Format', "hhh mmm sss")}/>;

doubleDigit.storyName = "Double digit";
singleDigit.storyName = "Single digit";
customFormat.storyName = "Custom digit";
