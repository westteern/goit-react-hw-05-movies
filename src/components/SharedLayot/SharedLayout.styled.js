import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  gap: 16px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #fffff;
  font-weight: 500;
  &.active {
    color: #ff9999;
  }
`;
