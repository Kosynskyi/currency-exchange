import styled from 'styled-components';

export const Text = styled.p`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.l};
  margin: ${props => props.theme.space[1]}px;
`;

export const Link = styled.a`
  color: ${props => props.theme.colors.primary};
`;
