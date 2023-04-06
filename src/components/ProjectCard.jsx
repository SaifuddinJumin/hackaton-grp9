const ProjectCard = (props) => {
    const { catId, catName } = props.data;

    return (
        <div className="col-md-4">
            <div className="card bg-light mt-2">
                <div className="card-body">
                    <h5 className="card-title">Project {catId}</h5>
                    <p className="card-text">Short description of task</p>
                    <p className="card-text">Role: {catName}</p>
                    <a href="#" className="btn btn-primary">Go to tasks</a>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard;