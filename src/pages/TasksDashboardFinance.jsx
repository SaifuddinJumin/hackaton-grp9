import JobList from "../components/JobList/JobList";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import TaskDashboardModal from "../components/TaskDashboardModal";

const TasksDashboard = () => {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <div className="container">
                    <h1>Marketing Services & Product - Tasks List</h1>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="card bg-light mt-2">
                                <div className="card-body">
                                    <h5 className="card-title">Task 1</h5>
                                    <p className="card-text">Short description of task</p>
                                    <Link to="/taskdashboard/taskpage" className="btn btn-primary">see more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card bg-light mt-2">
                                <div className="card-body">
                                    <h5 className="card-title">Task 2</h5>
                                    <p className="card-text">Short description of task</p>
                                    <Link to="/taskdashboard/taskpage" className="btn btn-primary">see more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card bg-light mt-2">
                                <div className="card-body">
                                    <h5 className="card-title">Task 3</h5>
                                    <p className="card-text">Short description of task</p>
                                    <Link to="/taskdashboard/taskpage" className="btn btn-primary">see more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card bg-light mt-2">
                                <div className="card-body">
                                    <h5 className="card-title">Task 4</h5>
                                    <p className="card-text">Short description of task</p>
                                    <Link to="/taskdashboard/taskpage" className="btn btn-primary">see more</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2 m-3">
                            <button type="button" class="btn btn-light border" data-toggle="modal" data-target="#exampleModal">Add</button>
                            <TaskDashboardModal />
                        </div>

                    </div>
                </div >
            </div>
        </>
    )
}
export default TasksDashboard;