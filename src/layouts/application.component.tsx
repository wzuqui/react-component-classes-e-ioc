import React from 'react';
import { Component, PropsWithChildren } from 'react';

import { MenuIcon } from '../assets/menu-icon';
import { Button } from '../components/button';
import { ioc } from '../ioc/container';
import { ApplicationService } from '../services/application.service';
import { IUser } from '../services/user.service.type';
import { styled } from '../styles/theme';
import { selectChildrenByType } from '../utils/selectChildrenByType';

interface ApplicationProps extends PropsWithChildren<{}> {}
interface ApplicationState {
  usuario?: IUser;
}

export class Application extends Component<ApplicationProps, ApplicationState> {
  public readonly service = ioc.get(ApplicationService);

  constructor(props: ApplicationProps) {
    super(props);
    this.state = {};
  }

  async acaoLogin() {
    await this.service.login();
    this.setState((prev) => ({
      ...prev,
      usuario: this.service.usuario,
    }));
  }

  render() {
    if (!this.state.usuario) {
      this.acaoLogin();
      return <div>Em precesso de login!</div>;
    }

    const [logo, main] = selectChildrenByType(
      this.props.children,
      Application.Header.Logo
    );

    return (
      <Container className="Application">
        <Header>
          <Header.Item>
            <Header.Menu>
              <MenuIcon />
            </Header.Menu>
            {logo}
          </Header.Item>
          <Header.Item>perfil aqui</Header.Item>
        </Header>
        <Main>{main}</Main>
      </Container>
    );
  }

  static Header = {
    Logo: styled('div', {
      alignItems: 'center',
      display: 'flex',
      width: '60px',
    }),
  };
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});
const Main = styled('main', {});

function Header({
  children,
  ...props
}: React.PropsWithChildren<{}> & React.HTMLAttributes<HTMLElement>) {
  const Container = styled('header', {
    alignItems: 'center',
    backgroundColor: '$gray',
    display: 'flex',
    justifyContent: 'space-between',
  });
  return (
    <Container {...props} className="Header">
      {children}
    </Container>
  );
}

Header.Item = function HeaderItem({
  children,
  ...props
}: React.PropsWithChildren<{}> & React.HTMLAttributes<HTMLElement>) {
  const Container = styled('div', {
    alignItems: 'center',
    display: 'flex',
  });
  return (
    <Container {...props} className="Item">
      {children}
    </Container>
  );
};

Header.Menu = function HeaderMenu({
  children,
  ...props
}: React.PropsWithChildren<{}> & React.HTMLAttributes<HTMLElement>) {
  const Container = styled(Button, {
    height: 24,
    overflow: 'hidden',
    position: 'relative',
    width: 24,
    span: {
      position: 'absolute',
      left: -1000,
    },
  });
  return (
    <Container {...props} className="Menu" type="button" stylingMode="text">
      <span>Menu</span>
      {children}
    </Container>
  );
};
