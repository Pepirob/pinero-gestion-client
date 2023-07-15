import { Link } from 'react-router-dom'
import { NavItemProps } from '../types'

const NavItem = ({ path, children }: NavItemProps) => {
  return <Link to={path}>{children}</Link>
}

export default NavItem
