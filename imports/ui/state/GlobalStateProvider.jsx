import React from 'react';
import PropTypes from 'prop-types';

import { LocaleProvider } from './LocaleState.jsx';

export const GlobalStateProvider = ({  
  children,
}) => (
  <LocaleProvider>
     {children}
  </LocaleProvider>
);

GlobalStateProvider.propTypes = {  
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

GlobalStateProvider.defaultProps = {
  
};