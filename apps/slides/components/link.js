import styled from 'styled-components';

const Link = styled.a`
  display: inline-block;
  background-color: white;
  color: black;
  padding: 1rem 2rem;
  margin: 2rem auto;
  font-size: 32px;
  text-decoration: none;
`;

Link.defaultProps = {
  target: '_blank',
  rel: 'noreferer noopener',
};

export default Link;
