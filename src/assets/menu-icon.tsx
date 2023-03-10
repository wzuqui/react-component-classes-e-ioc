import { styled } from '../styles/theme';

export function MenuIcon() {
  const Container = styled('svg', {
    fill: '$primary',
  });
  return (
    <Container xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M4.563 16.748h13.875a.562.562 0 0 1 .077 1.12l-.077.005H4.563a.563.563 0 0 1-.076-1.12l.076-.005h13.875H4.563Zm0-4.873h13.875a.563.563 0 0 1 .077 1.12l-.077.005H4.563a.562.562 0 0 1-.076-1.12l.076-.005h13.875H4.563Zm0-4.875h13.875a.562.562 0 0 1 .076 1.12l-.076.005H4.563a.562.562 0 0 1-.077-1.12L4.563 7h13.875H4.563Z" />
    </Container>
  );
}
