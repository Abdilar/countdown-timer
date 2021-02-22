import React from 'react';
import PropTypes from 'prop-types';
import { isEmptyString } from '../../utils/functions'

const Symbol = ({symbol, symbolClass}) => !isEmptyString(symbol) ? <span className={symbolClass}>{symbol}</span> : null;

Symbol.defaultProps = {
  symbol: "",
  symbolClass: ""
};

Symbol.propTypes = {
  symbol: PropTypes.string,
  symbolClass: PropTypes.string
};

export default Symbol;
