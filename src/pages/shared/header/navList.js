import NavItem from "./navItem"
const NavList = (props) => {
   // console.log(props)
    return (
        <ul className="navigation__items" role="menubar">
            <li className="nav__item" role="menuitem">
                <NavItem link="/About"
                    focused={true}
                    name="About"
                    click={props.click} />
            </li>
            <li className="nav__item" role="menuitem">
                <NavItem link="/Location"
                    focused={true}
                    name="Location"
                    click={props.click} />
            </li>
            <li className="nav__item" role="menuitem">
                <NavItem link="/Careers"
                    focused={true}
                    name="Careers"
                    click={props.click} />
            </li>
        </ul>
    )
}
export default NavList