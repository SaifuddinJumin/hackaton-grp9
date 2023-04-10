import {Link} from 'react-router-dom';

const TaskDetails = (props) => {
    const {taskName, taskDescription} = props.data;

    return (
        <div className="col-md-12">
            <div className="card bg-light mt-2">
                <div className="card-body">
                    <h5 className="card-title">{taskName}</h5>
                    <p className="card-text">{taskDescription}</p>
                    <Link to="#" className="btn btn-primary">see more</Link>
                </div>
            </div>
        </div>
    )
}

export default TaskDetails;