import BtnScoot from '../../shared/header/BtnScoot'
const SecondaryCard = (props) => {
    const hideBtn = props.learnBtnHide ? "learn__hide--btn" : ""
    return (
        <div className="cards2">
            <div className="cards2__image__wrapper">
                <img className="cards2__image" src={props.src} alt={props.alt} />
            </div>
            <div className="cards2__content__wrapper">
                <h3 className="cards2__title">{props.title}</h3>
                <p className="cards2__content">
                    {props.content}
                </p>
                <div className={`secondary__show--btn ${hideBtn}`}>  
                    <BtnScoot href={props.href} title={props.btnTitle} secondaryBtn={true}/>
               </div> 
            </div>
            
        </div>
    )
}
export default SecondaryCard