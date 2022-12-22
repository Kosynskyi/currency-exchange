import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const MainTitle = styled.h2`
  margin: ${props => props.theme.space[1]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.m};

  @media ${breakpoints.minTablet} {
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const Button = styled.button`
  margin-bottom: ${props => props.theme.space[5]}px;
  cursor: pointer;
  border: ${props => props.theme.borders.none};
  background-color: transparent;
  transition: 500ms;

  &:hover {
    transform: scale(1.2);
  }
`;

export const StyledInput = styled.input`
  width: 120px;
  padding: ${props => props.theme.space[3]}px;
`;

export const StyledSelect = styled.select`
  padding: ${props => props.theme.space[3]}px;
`;
