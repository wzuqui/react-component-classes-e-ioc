import { styled } from '../styles/theme';

export const Button = styled('button', {
  alignItems: 'center',
  display: 'flex',
  variants: {
    transparent: {
      true: {
        background: 'transparent',
      },
    },
    stylingMode: {
      text: {
        border: 'none',
      },
    },
  },
});