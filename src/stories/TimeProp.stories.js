import React from 'react';
import CountdownTimer from '../index';
// import {number} from '@storybook/addon-knobs';
// import {action} from '@storybook/addon-actions';

export default {
  title: 'Time prop',
  component: CountdownTimer,
  // argTypes: {
  //   time: {control: 'number'}
  // }
  // decorators: [story => <div className={styles.center}>{story()}</div>]
}

export const hours = () => <CountdownTimer time={3770}/>;
export const minute = () => <CountdownTimer time={160}/>;
export const second = () => <CountdownTimer time={20}/>;

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


// Hours.storyName = "Hours"
// Minutes.storyName = "Minute"
// Seconds.storyName = "Second"
