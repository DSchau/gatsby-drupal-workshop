import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: white;
  }
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  z-index: 1;

  :after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    ${props =>
      props.darken &&
      css`
        background-color: rgba(0, 0, 0, ${props.darken});
      `}
  }
`;

export default function FullScreenImage({ darken, src, ...rest }) {
  return ({ children }) => (
    <Container>
      <Content>{children}</Content>
      <Image src={src} darken={darken} {...rest} />
    </Container>
  );
}
