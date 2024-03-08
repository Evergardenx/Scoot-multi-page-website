const Jobs = (props) => {
    return (
        <div className="card__job__info">
            <div className="job__info">
                <h3 className="job__title">
                    {props.title}
                </h3>
                <p className="job__area">
                    {props.area}
                </p>
            </div>
            <a href="/" className="apply">
                Apply
            </a>
        </div>
    )
}
export default Jobs