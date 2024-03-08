
import SecondaryCard from '../../shared/main/cardSec'
/*****************  PRIMARY IMAGES *******************/
import Locate from '../../../assets/icons/locate.svg'
import Ride from '../../../assets/icons/ride.svg'
import Scooter from '../../../assets/icons/scooter.svg'
import Card from '../../shared/main/card'

/*****************  SECONDARY IMAGES *******************/
import Telementry from '../../../assets/images/telemetry.jpg'
import NearYou from '../../../assets/images/near-you.jpg'
import Payments from '../../../assets/images/payments.jpg'

const Main = () => {

    
    return (
        <main className="main main__home" >
            <section className="primary"
                aria-label="Steps to taken to successfully benefit from scoot">

                <h2 className="primary__title sr-only">How the application works?</h2>
                <div className="cards">

                    <Card src={Locate} title="Locate with app"
                        smallCard={true}
                        content="Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away." />

                    <Card src={Ride} title="Pick your scooter"
                        smallCard={true}
                        content="We show the most important info for the scooters closest to you.So you know how much
                            charge they have left and can see roughly how much it will cost." />

                    <Card src={Scooter} title="Enjoy the ride"
                        smallCard={true}
                        content="Scan the QR code and the bike will unlock.Retract the cable lock, put on a helmet,
                            and you’re off! Always lock bikes away from walkways and accessibility ramps." />


                </div>
            </section>

            <section className="secondary"
                aria-label="advantages of using scoot">
                <h2 className="secondary__title sr-only">The benefits of using scoot</h2>
                <div className="secondary__cards">
                    <SecondaryCard src={Telementry}
                        alt="a man enjoying using the scoot application on his mobile phone"
                        title="Easy to use riding telemetry"
                        btnTitle="Learn more"
                        href="/About"
                        content="The Scoot app is available with riding telemetry. This means it can show you your
                    average speed, how long you've been using the scooter, your traveling distance,
                    and many more things all in an easy to use app."/>

                    <SecondaryCard src={NearYou}
                        alt="riding through the busy cities made easy with scoot"
                        title="Coming to a city near you"
                        btnTitle="Learn more"
                        href="/Location"
                        content="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure 
                    to let us know if you want to see us in your hometown. We’re aiming to let our 
                    scooters loose on 23 cities over the coming year."/>

                    <SecondaryCard src={Payments}
                        alt="a satisfied customer paying for scoot services using cash"
                        title="Zero hassle payments"
                        btnTitle="Learn more"
                        href="/About"
                        content="Our payment is as easy as one two three. We accept most credit cards and debit cards. 
                    You can also link your PayPal account inside the app. Need to pay later? No worries! 
                    You can defer payment for up to a month."/>

                </div>

            </section>
        </main>
    )
}
export default Main
