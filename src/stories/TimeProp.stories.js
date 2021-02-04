import React from 'react';
import {number} from '@storybook/addon-knobs';
import CountdownTimer from '../index';
// import {action} from '@storybook/addon-actions';

export default {
  title: 'Time prop',
  component: CountdownTimer,
  // argTypes: {
  //   time: {control: 'number'}
  // }
  // decorators: [story => <div className={styles.center}>{story()}</div>]
}

export const Hours = () => <CountdownTimer time={number('Time', 3770)}/>;
export const Minutes = () => <CountdownTimer time={number('Time', 160)}/>;
export const Seconds = () => <CountdownTimer time={number('Time', 20)}/>;

// const Template = (args) => <CountdownTimer {...args} />

// export const Hours = Template.bind({});
// Hours.args = {
//   time: 3770,
// }
//
// export const Minutes = Template.bind({});
// Minutes.args = {
//   time: 90,
//   // onStop: action('Timer stopped.')
// }
//
// export const Seconds = Template.bind({});
// Seconds.args = {
//   // time: 10,
//   // onStop: action('Timer stopped.')
// }


Hours.storyName = "Countdown with Hours"
Minutes.storyName = "Countdown with Minutes"
Seconds.storyName = "Countdown with Seconds"
