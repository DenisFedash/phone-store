import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const NavItem = styled.li`
  position: relative;
`

export const LinkNav = styled(NavLink)`
  color: white;
  transition: white;
  text-decoration: none;
  &.active {
    text-decoration: underline;
    color: blue;
  }
  :hover,
  :focus {
    color: blue;
  }

  :not(:last-child) {
    margin-right: 15px;
  }
`
