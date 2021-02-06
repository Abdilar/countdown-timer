import React from 'react';
import CountdownTimer from '../index';
import {number, text} from '@storybook/addon-knobs';

export default {
  title: 'Editable Example',
  component: CountdownTimer
}

export const example = () => <CountdownTimer id={text('ID', 'unique-id')} time={number('Time', 8004)} format={text('Format', '[HH]:[MM]:[SS]')}/>
