import React from 'react';
import PropTypes from 'prop-types';
import { getZeroFormat, isEmptyString } from '../../helper/utils'
import { TYPE } from '../../config/variables'

const Time = ({format, className, type, number}) => {
  if (isEmptyString(type)) return null;
  const { digitClass = '', hoursClass = 'hour', minuteClass = '', secondClass = '' } = className;
  const customClass = type === TYPE.HOURS ?
    hoursClass :
    type === TYPE.MINUTES ?
      minuteClass :
      type === TYPE.SECONDS ?
        secondClass :
        '';

  return (
    <span className={`${digitClass} ${customClass}`}>{format.includes(type) ? number : getZeroFormat(number)}</span>
  )
};

Time.defaultProps = {
  format: "",
  className: {},
  number: 0,
  type: "",
};

Time.propTypes = {
  format: PropTypes.string,
  className: PropTypes.object,
  number: PropTypes.number,
  type: PropTypes.string,
};

export default Time;
