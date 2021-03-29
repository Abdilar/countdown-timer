# @sakit-sa/countdown-timer

> Simple, easy countdown timer for React

[![NPM](https://img.shields.io/npm/v/@sakit-sa/countdown-timer.svg)](https://www.npmjs.com/package/@sakit-sa/countdown-timer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Countdown timer

![Spinner gif](https://raw.githubusercontent.com/Abdilar/countdown-timer/master/src/asset/images/react-countdown-timer.gif)

## Live Playground
For examples of the countdown-timer in action, go to https://abdilar.github.io/countdown-timer.

OR

To run that demo on your own computer:
* Clone this repository
* `npm install`
* `npm run storybook`
* Visit http://localhost:6006/

## Getting Started
### Install

```sh
npm install @sakit-sa/countdown-timer
```

### Usage
```jsx
import CountdownTimer from '@sakit-sa/countdown-timer';

<CountdownTimer 
  time={90}
  format="[hh]:[mm]:[ss]"
  onComplete={() => console.log("The timer completed")} 
/>
```

### Props
Name | Type | Default | Description
-----|------|-------|-----
**id**|`string`|`countdown-timer-[random-number]`|The unique identifier for the component.
**time**|`number`|`required`|The value of the timer base on second.
**format**|`string`|`HH:MM:SS`|Formats a time value.
**onComplete**|`function`|`-`|Trigger when timer is zero.

### Format Token
Token | Description
-----|-----
**HH**|`Hours` leading zero for single-digit hours.
**hh**|`Hours` *no* leading zero for single-digit hours.
**MM**|`Minute` leading zero for single-digit minute.
**mm**|`Minute` *no* leading zero for single-digit minute.
**SS**|`Second` leading zero for single-digit second.
**ss**|`Second` *no* leading zero for single-digit second.

### License

MIT © [Saeed Abdilar](https://github.com/Abdilar)
