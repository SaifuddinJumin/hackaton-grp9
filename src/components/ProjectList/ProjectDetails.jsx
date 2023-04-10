import {Link} from 'react-router-dom';

const ProjectDetails = (props) => {
    const {projectName, projectDescription, projectRole} = props.data;

    return (
        <div className="col-md-6">
        <div className="card bg-light mt-2">
            <div className="card-body">
                <h5 className="card-title font-weight-bold">{projectName}</h5>
                <p className="card-text">{projectDescription}</p>
                <p className="card-text badge badge-success align-self-center">Role: {projectRole}</p>
                <Link to="#" className="btn btn-primary btn-block">Go to tasks</Link>
            </div>
        </div>
    </div>
    )
}

export default ProjectDetails;