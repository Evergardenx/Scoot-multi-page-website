const BtnScoot = (props) => {
    const heroWrapper = props.heroWrapper ? "scoot__hero__wrapper" : ""
    const heroBtn = props.heroBtn ? "hero--btn" : ""
    const secondaryBtn = props.secondaryBtn ? "cards__secondary--btn" : ""
    return (
        <div className={`wrapper__scoot ${heroWrapper}`}>
            <a href={props.href} className={`wrapper__scoot--btn ${heroBtn} ${secondaryBtn}`}>
                {props.title}
            </a>
        </div>
    )
}
export default BtnScoot