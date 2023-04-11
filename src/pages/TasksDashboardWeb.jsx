import JobList from "../components/JobList/JobList";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import TaskDashboardModal from "../components/TaskDashboardModal";

import { useState, useRef } from "react";
import TaskDetail from "../components/TaskDetails";
import ChatInput from "../components/ChatInput/ChatInput";

const TasksDashboardWeb = () => {
    const modalRef = useRef(null)
    const [taskDetails, setTaskDetails] = useState([])
    const [taskDetail, setTaskDetail] = useState({
        taskName: '',
        taskDescription: '',
        taskStatus: '',
        taskPath: ''
    });

    const updateTasks = () =>{
        taskDetails.push(taskDetail)
        
        const newTaskDetail = {...taskDetail}
        setTaskDetail(newTaskDetail)
    }

    return (
        <>
            <Navbar />
            <div className="wrapper top-gap">
                <div className="container">
                    <h1>Web Development - Tasks List</h1>

                    <div className="row">
                        <div className="col-md-12" >
                            <div className="card bg-light mt-2">
                                <div className="card-body">
                                    <h5 className="card-title">Create CRUD function for inventory</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sapiente dolores quos ad fugiat, obcaecati quae? Obcaecati sequi quis...</p>
                                    <Link to="/taskdashboard/taskpage/web1" className="btn btn-primary">see more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card bg-light mt-2">
                                <div className="card-body">
                                    <h5 className="card-title">Make a connection between react and firebase</h5>
                                    <p className="card-text">Accusantium sapiente dolores quos ad fugiat, obcaecati quae? Lorem ipsum dolor sit amet consectetur adipisicing elit.  Obcaecati dolor sit amet...</p>
                                    <Link to="/taskdashboard/taskpage/web2" className="btn btn-primary">see more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card bg-light mt-2">
                                <div className="card-body">
                                    <h5 className="card-title">Create login and registration page</h5>
                                    <p className="card-text">Possimus maxime neque quas expedita sit voluptatibus quasi dignissimos. Nostrum quia laborum optio laudantium ullam, inventore quae possimus...</p>
                                    <Link to="/taskdashboard/taskpage/web3" className="btn btn-primary">see more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card bg-light mt-2">
                                <div className="card-body">
                                    <h5 className="card-title">Backend database development with firebase</h5>
                                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro totam vero incidunt, optio tempore nam similique corrupti expedita eveniet...</p>
                                    <Link to="/taskdashboard/taskpage/web4" className="btn btn-primary">see more</Link>
                                </div>
                            </div>
                        </div>

                        {
                            taskDetails.map((data, index) =>
                                <TaskDetail data={data} key={index}/>
                            )
                        }

                        <div className="col-md-2 m-3">
                            <button type="button" class="btn btn-light border" data-toggle="modal" data-target="#exampleModal">Add</button>
                            <TaskDashboardModal taskDetail={taskDetail} setTaskDetail={setTaskDetail} onSubmit={updateTasks} modalRef={modalRef}/>
                        </div>



                    </div>
                </div >
            </div>
            <ChatInput />
        </>
    )
}
export default TasksDashboardWeb;