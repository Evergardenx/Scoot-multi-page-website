import Apple from '../../../assets/icons/app-store.svg'
import Google from '../../../assets/icons/google-play.svg'
const Aside = () => {
    return (
        <aside id="sign" className="aside">
            <div className="aside__wrapper">
                <h2 className="aside__title">
                    Sign up and Scoot off today
                </h2>
                
                <ul className="aside__deco">
                    <li>
                        <a className="aside__deco--btn"
                            href="/"
                            aria-label="download it on google play">
                            <img className="google"
                                src={Google}
                                alt=""
                                aria-hidden={true} />
                        </a>
                    </li>
                    <li>
                        <a className="aside__deco--btn"
                            href="/" aria-label="download it on apple store">
                            <img className="apple"
                                src={Apple}
                                alt=""
                                aria-hidden={true} />
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside