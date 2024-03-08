//import { useRef, useEffect } from 'react'
import MapMobile from '../../../assets/images/world-map-mobile.png'
import MapTablet from '../../../assets/images/world-map-tablet.png'
import MapDesktop from '../../../assets/images/world-map-desktop.png'
import BtnScoot from '../../shared/header/BtnScoot'

const Main = () => {
   
    return (
        <main className="main main__location">

            <section className="primary"
                aria-label="our areas of business worldwide">

                <h2 className="sr-only">the world map showing our areas of operating</h2>

                <div className="maps">

                    <div className="map__image">
                        <picture>
                            <source media="(min-width: 67rem)" srcSet={MapDesktop} />
                            <source media="(min-width: 38rem)" srcSet={MapTablet} />
                            <img className="map__image__map" src={MapMobile} alt="we operate in several cities on the globe" srcSet={MapMobile} />
                        </picture>
                    </div>

                    <div className="location__select">
                        <span className="city new__york">New York</span>
                        <span className="city london">London</span>
                        <span className="city yokohama">Yokohama</span>
                        <span className="city jakarta">Jakarta</span>
                    </div>

                    <div className="map__extras">

                        <h3 className="map__title">
                            Your city not listed?
                        </h3>

                        <p className="map__content">
                            If you’d like to see Scoot in your hometown, be sure to let us know. We track
                            requests and plan launches based on demand. Feel free to message us by clicking
                            the link or messaging us on social.
                        </p>

                        <div className="hero__btn__wrapper secondary__show--btn hero__btn__wrapper__loc">
                            <BtnScoot href="#" title="Message Us" />
                        </div>

                    </div>

                </div>

            </section>
        </main>
    )
}
export default Main