import { useRef, useEffect } from 'react'
import Header from '../../shared/header/header'
import Main from './main'
const MainHome = () => {
    const homeMain = useRef()

    useEffect(() => {
        homeMain.current.focus()
    })

    return (
        <div tabIndex="-1"
            className="main__container"
            ref={homeMain}>
            <Header title="Scooter sharing made simple" home={true}
                content="Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient 
                        locations in each of our cities. Use our app to locate the nearest bike, unlock 
                         it with a tap, and you’re away!"/>

            <Main />
        </div>
    )
}
export default MainHome
