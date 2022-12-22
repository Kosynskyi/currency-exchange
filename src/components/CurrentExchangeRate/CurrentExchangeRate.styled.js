import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.space[5]}px;
  padding-top: ${props => props.theme.space[6]}px;

  @media ${breakpoints.minTablet} {
    flex-direction: row;
  }
`;

export const MainTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.s};
  margin: ${props => props.theme.space[1]}px;
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;

  @media ${breakpoints.minTablet} {
    margin-bottom: ${props => props.theme.space[1]}px;
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const CurrentRateList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${props => props.theme.space[1]}px;
  margin-left: ${props => props.theme.space[0]}px;
  margin-right: ${props => props.theme.space[0]}px;
  padding: ${props => props.theme.space[1]}px;
  list-style: none;
  width: 350px;
`;

export const CurrentRateItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-right: ${props => props.theme.space[5]}px;

  &:last-child {
    margin-right: ${props => props.theme.space[1]}px;
  }

  & p:not(:last-child) {
    margin-right: ${props => props.theme.space[4]}px;
  }
`;

export const Text = styled.p`
  margin: ${props => props.theme.space[1]}px;
`;
