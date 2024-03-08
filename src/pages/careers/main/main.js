//import { useRef, useEffect } from 'react'
import SecondaryCard from '../../shared/main/cardSec'
import Careers from '../../../assets/images/join-us.jpg'
import Card from '../../shared/main/card'
import Jobs from '../main/jobs'

import Tech from '../../../assets/images/our-tech.jpg'
import Integrity from '../../../assets/images/our-integrity.jpg'
import Community from '../../../assets/images/our-community.jpg'

const Main = () => {
 /*   const careersMain = useRef()

    useEffect(() => {
        careersMain.current.focus()
    })
*/
    return (
        <main className="main main__careers" >
            <section className="secondary"                
                aria-label="partner with us through our career offers">
                <h2 className="secondary__title sr-only">Careers</h2>
                <div className="secondary__cards ">
                    <SecondaryCard src={Careers}
                        title="Care to join our mission?"
                        btnTitle="Say Hello"
                        href=""
                        alt="scoot employees having a business discussion in a spacious office"
                        content="We’re always looking for ambitious individuals to help us on our journey. If you’re 
                        passionate about our mission to provide clean, accessible transport to improve urban 
                        living we want to hear from you!" />
                </div>
            </section>

            <section className="primary"               
                aria-label="Everything you need to know to work with us">

                <h2 className="primary__title">Why join us?</h2>
                <div className="cards">

                    <Card src={Tech} title="Our tech"
                        largeCard={true}
                        largeCardWrapper={true}
                        cardAbout={true}
                        content=" We’re using cutting edge technology to drive accessible urban
                         transportation forward. Our fully electric scooters are a joy to ride!" />

                    <Card src={Integrity} title="Our integrity"
                        largeCard={true}
                        largeCardWrapper={true}
                        cardAbout={true}
                        content="We are fully committed to deliver a great yet safe, sustainable
                         micro-mobility experience in every city we serve."/>

                    <Card src={Community} title="Our community"
                        largeCard={true}
                        largeCardWrapper={true}
                        cardAbout={true}
                        content=" We support every community we serve. All workers are paid a 
                        living wage based on their location and are Scoot employees."/>

                </div>
            </section>

            <section aria-label="here are a list of available vacancies">
                <h2 className="secondary__title sr-only">
                    a wide list of all the vacancies available
                </h2>

                <div className="cards cards__jobs">
                    <Jobs title="General Manager" area="Jakarta, Indonesia"/>
                    <Jobs title="UI/UX Designer" area="Yokohama, Japan"/>
                    <Jobs title="Blog Content Copywriter" area="New York, United States"/>
                    <Jobs title="Graphic Designer" area="New York, United States"/>
                    <Jobs title="Fleet Supervisor" area="Jakarta, Indonesia"/>
                    <Jobs title="UX Analyst" area="London, United Kingdom"/>
                </div>

            </section>

        </main>
    )
}
export default Main