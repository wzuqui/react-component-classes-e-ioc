import React from 'react';
import { Children, Component, PropsWithChildren } from 'react';

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
            <BotaoMenu />
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
const BotaoMenu = styled('button', {});

function Header(
  props: React.PropsWithChildren<{}> & React.HTMLAttributes<HTMLElement>
) {
  const Container = styled('header', {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  });
  const { children } = props;
  return (
    <Container className="Header" {...props}>
      {children}
    </Container>
  );
}

Header.Item = function HeaderItem(
  props: React.PropsWithChildren<{}> & React.HTMLAttributes<HTMLElement>
) {
  const Container = styled('div', {
    alignItems: 'center',
    display: 'flex',
  });
  const { children } = props;
  return (
    <Container className="Item" {...props}>
      {children}
    </Container>
  );
};
