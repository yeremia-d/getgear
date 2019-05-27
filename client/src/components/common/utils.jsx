const colors = {
  primary: 'FFFFFF',
  secondary: 'FFFFFF',
  accent: 'FFFFFF',

};

const screenSizes = {
  desktop: 992,
  tablet: 768,
  mobile: 576,
};

const mediaQuery = Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (max-width: ${screenSizes[label] / 16}em) {
      ${css(...args)}
    }`;

  return acc;
}, {});

export {screenSizes, colors, mediaQuery};
