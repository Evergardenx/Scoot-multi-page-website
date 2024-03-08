import BtnScoot from "./BtnScoot"
const Header = (props) => {
    const heroHome = props.home ? "hero__home" : ""
    const heroAbout = props.about ? "hero__about" : ""
    const heroLocation = props.location ? "hero__location" : ""
    const heroCareers = props.careers ? "hero__careers" : ""
    return (
        <header>
            <div className={`hero ${heroHome} ${heroAbout} ${heroLocation} ${heroCareers}`}>
                <div className="hero__wrapper">
                    <h1 className="hero__title">
                        {props.title}
                    </h1>
                    <p className="hero__content">
                        {props.content}
                    </p>
                    <div className="hero__btn__wrapper">
                        <BtnScoot href="#sign" title="Get Scootin" heroWrapper={true} heroBtn={true} />
                    </div>
                </div>
                <span className="inner__img"></span>
            </div>
        </header>
    )
}
export default Header