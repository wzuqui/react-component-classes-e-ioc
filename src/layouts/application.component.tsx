import React, { useState } from 'react';
import { Component, PropsWithChildren } from 'react';

import { MenuIcon } from '../assets/menu-icon';
import { Button } from '../components/button';
import { ioc } from '../ioc/container';
import { ApplicationService } from '../services/application.service';
import { IUser } from '../services/user.service.type';
import { styled } from '../styles/theme';
import { selectChildrenByType } from '../utils/selectChildrenByType';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

const Main = styled('main', {});

const Header = styled('header', {
  alignItems: 'center',
  backgroundColor: '$gray',
  display: 'flex',
  justifyContent: 'space-between',
});

const HeaderItem = styled('div', {
  alignItems: 'center',
  display: 'flex',
});

const HeaderMenu = styled(Button, {
  height: 24,
  overflow: 'hidden',
  position: 'relative',
  width: 24,
  span: {
    position: 'absolute',
    left: -1000,
  },
});

const HeaderLogo = styled('div', {
  alignItems: 'center',
  display: 'flex',
  width: '60px',
});

export function Application({ children }: PropsWithChildren<{}>) {
  const service = ioc.get(ApplicationService);
  const [user, setUser] = useState<IUser | undefined>();

  async function acaoLogin() {
    await service.login();
    setUser(service.usuario);
  }

  if (!user) {
    acaoLogin();
    return <div>Em precesso de login!</div>;
  }

  const [logo, main] = selectChildrenByType(children, Application.Header.Logo);

  return (
    <Container className="Application">
      <Header className="Header">
        <HeaderItem className="Item">
          <HeaderMenu className="Menu" type="button" stylingMode="text">
            <span>Menu</span>
            <MenuIcon />
          </HeaderMenu>
          {logo}
        </HeaderItem>
        <HeaderItem className="Item">
          <span>perfil aqui</span>
        </HeaderItem>
      </Header>
      <Main>{main}</Main>
    </Container>
  );
}

function ApplicationHeader() {}

Application.Header = ApplicationHeader;
ApplicationHeader.Logo = HeaderLogo;
