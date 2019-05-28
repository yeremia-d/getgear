import {css} from 'styled-components';

/**
 * Standard Screen Sizes
 */
const screenSizes = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
};

/**
 * media templates for styled components
 */
const MediaQuery = Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (min-width: ${screenSizes[label] / 16}em) {
      ${css(...args)}
    }`;

  return acc;
}, {});

export default MediaQuery;
