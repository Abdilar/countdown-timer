export function isFunction(data) {
  return typeof data === 'function';
}

export function isNumber(data) {
  return typeof data === 'number';
}

export function isString(data) {
  return typeof data === 'string';
}

export function isEmptyString(data) {
  return !(isString(data) ? data : false);
}

export function getTime(time) {
  if (!isNumber(time)) return {hours: 0, minutes: 0, seconds: 0};

  const seconds = time % 60;
  let minutes = ((time - seconds) / 60);
  const hours = Math.floor(time / 3600);
  minutes %= 60;
  return {hours, minutes, seconds};
}

export function getZeroFormat(number) {
  return number < 10 ? `0${number}` : number;
}

export function getLastIndex(array) {
  return Array.isArray(array) ? array.length - 1 : undefined;
}
