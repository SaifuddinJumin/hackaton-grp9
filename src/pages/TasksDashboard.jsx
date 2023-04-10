import JobList from "../components/JobList/JobList";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import TaskDashboardModal from "../components/TaskDashboardModal";


const TasksDashboard = () => {
    return (
        <>
            <Navbar />
            <div className="wrapper" >
                <div className="container">
                    <h1>Web Development - Tasks List</h1>

                    <div className="row">
                        <div className="col-md-12" >
                            <div className="card bg-light mt-2">
                                <div className="card-body">
                                    <h5 className="card-title">Create CRUD function for inventory</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sapiente dolores quos ad fugiat, obcaecati quae? Obcaecati sequi quis...</p>
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

                        {/* <div className="col-md-1"></div> */}

                        <div className="col-md-2 m-3">
                            <button type="button" class="btn btn-light border" data-toggle="modal" data-target="#exampleModal">Add</button>
                            <TaskDashboardModal />
                        </div>
                        {/* <div className="col-md-5"></div> */}



                    </div>
                </div >
            </div>
        </>
    )
}
export default TasksDashboard;