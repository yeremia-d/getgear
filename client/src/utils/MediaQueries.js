import {css} from 'styled-components';

/**
 * Standard Screen Sizes
 */
const screenSizes = {
  desktop: 992,
  tablet: 768,
  mobile: 576,
};

/**
 * media templates for styled components
 */
const MediaQuery = Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (max-width: ${screenSizes[label] / 16}em) {
      ${css(...args)}
    }`;

  return acc;
}, {});

export default MediaQuery;
