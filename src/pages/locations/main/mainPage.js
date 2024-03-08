import { useRef, useEffect } from 'react'
import Header from '../../shared/header/header'
import Main from './main'
const MainLocation = () => {

    const locMain = useRef()

    useEffect(() => {
        locMain.current.focus()
    })

    return (
        <div tabIndex="-1"
            className="main__container"
            ref={locMain}>
            <Header title="Location" location={true} />
            <Main />
        </div>
    )
}
export default MainLocation