import { Logo } from './assets/logo';
import { Application } from './layouts/application.component';
import { Skeleton } from './layouts/skeleton.component';
import { styled } from './styles/theme';

export function App() {
  return (
    <Container className="App">
      <Application>
        <Application.Header.Logo>
          <Logo />
        </Application.Header.Logo>
        <Skeleton />
      </Application>
    </Container>
  );
}

const Container = styled('div', {});
