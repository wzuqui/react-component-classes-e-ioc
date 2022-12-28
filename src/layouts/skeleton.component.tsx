import { Component } from 'react';

import { styled } from '../styles/theme';

interface SkeletonProps {
  titulo: string;
}

export class Skeleton extends Component<SkeletonProps> {
  static defaultProps: { titulo: string };

  constructor(props: SkeletonProps) {
    super(props);
  }

  render() {
    return (
      <Container className="Skeleton">
        <Header>
          <Title>{this.props.titulo}</Title>
          <Breadcrumbs />
          <Close />
        </Header>
      </Container>
    );
  }
}
Skeleton.defaultProps = {
  titulo: 'Título da página',
};

const Container = styled('div', {});
const Header = styled('header', {});
const Title = styled('h1', {});
const Breadcrumbs = styled('nav', {});
const Close = styled('button', {});
