# @sakit-sa/countdown-timer

> Simple, easy countdown for react

[![NPM](https://img.shields.io/npm/v/@sakit-sa/countdown-timer.svg)](https://www.npmjs.com/package/@sakit-sa/countdown-timer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @sakit-sa/countdown-timer
```

## Usage
```jsx
import CountdownTimer from '@sakit-sa/countdown-timer';

<CountdownTimer 
  time={90}
  format="[hh]:[mm]:[ss]"
  onStop={() => console.log("The timer stopped")} 
/>
```

## Props
Name | Type | Default | Description
-----|------|-------|-----
**time**|`number`|`required`|The value of the timer base on second.
**format**|`string`|`HH:MM:SS`|Formats a time value
**onStop**|`function`|`-`|Trigger when timer is zero


## License

MIT © [Saeed Abdilar](https://github.com/Abdilar)
