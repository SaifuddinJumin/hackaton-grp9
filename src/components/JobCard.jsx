const JobCard = (props) => {
    const { subId } = props.data;

    return (
        <div>
            <div className="card bg-light ">
                <div className="card-body">
                    <h5 className="card-title">Task { subId }</h5>
                    <p className="card-text">Short description of task</p>
                    <a href="#" className="btn btn-primary">see more</a>
                </div>
            </div>
        </div>

    )
}
export default JobCard;