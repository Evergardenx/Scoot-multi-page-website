import SecondaryCard from '../../shared/main/cardSec'
import BetterLiving from '../../../assets/images/better-living.jpg'
import DigitalEra from '../../../assets/images/digital-era.jpg'

import Tech from '../../../assets/images/our-tech.jpg'
import Integrity from '../../../assets/images/our-integrity.jpg'
import Community from '../../../assets/images/our-community.jpg'

import Card from '../../shared/main/card'


const Main = () => {   

    const handleSubmit = (evt) => {
        const btn = evt.target
        const attr = btn.getAttribute("aria-expanded");
        console.log(attr)
        btn.classList.toggle("collapsed")

        //  btn.setAttribute("aria-expanded", "true")
        const targetData = evt.target.dataset.bsTarget //get the target element by using the dataset - pointing
        // to id of target element
        const targetElement = document.querySelector(targetData)
        // const targetDataId = targetData.substring(1) //get the id of the clicked element
        targetElement.classList.toggle("show")


        if (attr === "false") {
            btn.setAttribute("aria-expanded", "true")
        } else {
            btn.setAttribute("aria-expanded", "false")
        }

    }



    return (
        <main className="main main__about">
            <section className="secondary"
                aria-label="our products and services">
                <h2 className="secondary__title sr-only">Our services are here for you</h2>

                <div className="secondary__cards secondary__cards__about">
                    <SecondaryCard src={DigitalEra}
                        alt="a client familializing with the mobile app"
                        title="Mobility for the digital era"
                        learnBtnHide={true}
                        content="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips." />
                    <SecondaryCard src={BetterLiving} alt="a scooter as work in an urban area"
                        title="Better urban living"
                        learnBtnHide={true}
                        content="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride." />
                </div>

            </section>

            <section className="primary"
                aria-label="What we stand for and value most">

                <h2 className="primary__title">Our values</h2>
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

            {/****************** FAQS ACCORDION *******
             ********************STARTING POINT*******/}

            <section className="accordion__section accordion__one">
                <h2 className="accordion__section__heading">
                    faqs
                </h2>

                {/****************** FIRST ACCORDION *******
             ********************STARTING POINT*******/}

                <div className="accordion__wrapper">
                    <div className="accordion__title__wrapper">
                        <h3 className="accordion__title">How it works</h3>
                    </div>
                    <div className="accordion" id="accordionExample">
                        {/*ACCORDION ITEM ONE OF 1 */}
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingOne">
                                <button className="accordion-button"
                                    onClick={handleSubmit}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne">
                                    How do I download the app?
                                </button>
                            </h4>

                            <div id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    To download the Scoot app, you can search “Scoot” in both the App and Google Play stores.
                                    An even simpler way to do it would be to click the relevant link at the bottom of this
                                    page and you’ll be re-directed to the correct page.
                                </div>
                            </div>
                        </div>
                        {/********* ACCORDION ITEM ONE OF 1 END******** */}

                        {/*ACCORDION ITEM TWO OF 1*/}
                        <div className="accordion-item">
                            <h4 className="accordion-header"
                                id="headingTwo">

                                <button className="accordion-button collapsed"
                                    onClick={handleSubmit}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    Can I find a nearby Scoots?
                                </button>
                            </h4>

                            <div id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">

                                <div className="accordion-body">
                                    Definitely! Simply open up the app and allow us to find your location while using it. We'll
                                    show you all of the closest Scoots and some extra useful information.
                                </div>
                            </div>
                        </div>
                        {/***************ACCORDION ITEM TWO OF 1 END*************** */}

                        {/*ACCORDION ITEM THREE OF 1 */}
                        <div className="accordion-item">
                            <h4 className="accordion-header"
                                id="headingThree">

                                <button className="accordion-button collapsed"
                                    onClick={handleSubmit}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree">
                                    Do I need a license to ride?
                                </button>
                            </h4>

                            <div id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">

                                <div className="accordion-body">
                                    Yup! We provide information inside the app regarding local laws and the license you need to be
                                    able to ride our Scoots.
                                </div>
                            </div>
                        </div>
                        {/************ACCORDION ITEM THREE OF 1 END********* */}
                    </div>
                </div>
                {/****************** FIRST ACCORDION *******
             ********************ENDING POINT*******/}

                {/******************THE SECOND ACCORDION *******
             ********************STARTING POINT ACCORDION NUMBER 2 *******/}

                <div className="accordion__wrapper accordion__wrapper2">

                    <div className="accordion__title__wrapper">
                        <h3 className="accordion__title">Safe driving</h3>
                    </div>

                    <div className="accordion"
                        id="accordionExample">
                        {/*ACCORDION ITEM ONE OF 2 */}
                        <div className="accordion-item">

                            <h4 className="accordion-header"
                                id="headingFive">
                                <button className="accordion-button accordion-button2"
                                    onClick={handleSubmit}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive"
                                    aria-expanded="true"
                                    aria-controls="collapseFive">
                                    Should I wear a helmet?
                                </button>
                            </h4>

                            <div id="collapseFive"
                                className="accordion-collapse accordion-collapse2 collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">

                                <div className="accordion-body">
                                    Yes, please do! All cities have different laws. But we strongly strongly strongly recommend
                                    always wearing a helmet regardless of the local laws. We like you and we want you to be as
                                    safe as possible while Scooting.
                                </div>

                            </div>

                        </div>
                        {/********* ACCORDION ITEM ONE OF 2 END******** */}

                        {/*ACCORDION ITEM TWO OF 2*/}
                        <div className="accordion-item">
                            <h4 className="accordion-header"
                                id="headingSix">

                                <button className="accordion-button accordion-button2 collapsed"
                                    onClick={handleSubmit}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseSix"
                                    aria-expanded="false"
                                    aria-controls="collapseSix">
                                    How about the rules &amp; regulations?
                                </button>
                            </h4>

                            <div id="collapseSix"
                                className="accordion-collapse accordion-collapse2 collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">

                                <div className="accordion-body">
                                    Now is not the time to be a rule breaker. Be sure you're complying with all local laws and
                                    regulations. Also, just be a good human being. Be sure not to park your Scoot where it can
                                    block access to buildings or get in people's way.
                                </div>
                            </div>
                        </div>
                        {/***************ACCORDION ITEM TWO OF 2 END*************** */}

                        {/*ACCORDION ITEM THREE OF 2 */}
                        <div className="accordion-item">
                            <h4 className="accordion-header"
                                id="headingSeven">
                                <button className="accordion-button accordion-button2 collapsed"
                                    onClick={handleSubmit}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseSeven"
                                    aria-expanded="false"
                                    aria-controls="collapseSeven">
                                    What if I damage my Scoot?
                                </button>
                            </h4>

                            <div id="collapseSeven"
                                className="accordion-collapse accordion-collapse2 collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">

                                <div className="accordion-body">
                                    Be sure to read our terms and conditions carefully. Not the most fun job we know but we make
                                    it as clear as possible. There's an option to add insurance for each trip, or you can sign
                                    up for annual insurance if you're a regular Scooter.
                                </div>

                            </div>

                        </div>
                        {/************ACCORDION ITEM THREE OF 2 END********* */}
                    </div>
                </div>


                {/****************** THE SECOND ACCORDION *******
             ********************ENDING POINT*******/}
            </section>
            {/****************** FAQS ACCORDION *******
             ********************ENDING POINT*******/}
        </main>
    )
}
export default Main

