import React from 'react';
import CountdownTimer from '../index';

import "./Story.style.scss";

export default {
  title: "Event",
  component: CountdownTimer
}

export const complete = () => <CountdownTimer time={10} onComplete={() => alert('Timer completed!')} />
