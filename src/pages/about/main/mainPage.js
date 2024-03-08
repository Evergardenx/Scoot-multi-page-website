import { useEffect, useRef } from 'react'
import Header from '../../shared/header/header'
import Main from './main'
const MainAbout = () => {
    const aboutMain = useRef()

    useEffect(() => {
        aboutMain.current.focus()
    })
    return (
        <div className="main__container"
            tabIndex="-1"
            ref={aboutMain}>
            <Header title="About" about={true} />
            <Main />
        </div>
    )
}
export default MainAbout