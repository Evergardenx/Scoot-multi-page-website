import { Link } from 'react-router-dom'
import NavItem from "../header/navItem"
import Logo from '../../../assets/logo.svg'

import Facebook from '../../../assets/icons/facebook.svg'
import Twitter from '../../../assets/icons/twitter.svg'
import Instagram from '../../../assets/icons/instagram.svg'

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <ul className="footer__nav">
                    <li className="nav__item">
                        <Link to="/" className="logo--btn">
                            <img className="footer__logo"
                                src={Logo}
                                alt="Welcome to scoot international" />
                        </Link>
                    </li>
                    <li className="nav__item">
                        <NavItem link="/About"
                            name="About"
                            click={props.click} />
                    </li>
                    <li className="nav__item">
                        <NavItem link="/Location"
                            name="Location"
                            click={props.click} />
                    </li>
                    <li className="nav__item">
                        <NavItem link="/Careers"
                            name="Careers"
                            click={props.click} />
                    </li>
                </ul>

                <ul className="footer__socials">
                    <li className="socials__listitem">
                        <a className="footer__socials--btn"
                            href="www.facebook.com"
                            aria-label="welcome to our facebook page">
                            <img className="footer__socials--icon"
                                src={Facebook}
                                alt="" />
                            <span className="sr-only">Scoot facebook page</span>
                        </a>
                    </li>

                    <li className="socials__listitem">
                        <a className="footer__socials--btn"
                            href="www.twitter.com"
                            aria-label="welcome to our twitter handle">
                            <img className="footer__socials--icon"
                                src={Twitter}
                                alt="" />
                            <span className="sr-only">Scoot facebook page</span>
                        </a>
                    </li>

                    <li className="socials__listitem">
                        <a className="footer__socials--btn"
                            href="www.instagram.com"
                            aria-label="welcome to our instagram page">
                            <img className="footer__socials--icon"
                                src={Instagram} alt="" />
                            <span className="sr-only">Scoot facebook page</span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer