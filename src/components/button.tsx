import { styled } from '../styles/theme';

export type ButtonProps = React.PropsWithChildren<typeof Container> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <Container type="button" {...props}>
      {children}
    </Container>
  );
}

const Container = styled('button', {
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
