import { createStitches } from '@stitches/react';

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      gray: 'rgb(233, 233, 233)',
    },
    fonts: {
      normal:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
  },
});

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
  'html, body, #root': {
    height: '100vh',
    fontFamily: '$normal',
  },
});
