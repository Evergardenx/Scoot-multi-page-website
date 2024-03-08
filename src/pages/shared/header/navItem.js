import { Link } from 'react-router-dom'
const NavItem = (props) => {
    const focused = props.focused ? "focused--btn" : ""
    return (
        <Link className={`nav__item--btn ${focused}`}
            aria-current="page"
            to={props.link}
            onClick={props.click}>
            {props.name}
        </Link>

    )
}
export default NavItem