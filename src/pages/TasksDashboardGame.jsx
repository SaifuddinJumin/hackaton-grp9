import JobList from "../components/JobList/JobList";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import TaskDashboardModal from "../components/TaskDashboardModal";

import { useState, useRef } from "react";
import TaskDetail from "../components/TaskDetails";
import ChatInput from "../components/ChatInput/ChatInput";

const TasksDashboardGame = () => {
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
            <div className="wrapper">
                <div className="container">
                    <h1>Game Design - Tasks List</h1>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="card bg-light mt-2">
                                <div className="card-body">
                                    <h5 className="card-title">Narrative Storyboarding</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sapiente dolores quos ad fugiat, obcaecati quae? Obcaecati sequi quis corrupti ipsa voluptas voluptatibus...</p>
                                    <Link to="/taskdashboard/taskpage/game1" className="btn btn-primary">see more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card bg-light mt-2">
                                <div className="card-body">
                                    <h5 className="card-title">Gameplay Loop Planning</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ab.</p>
                                    <Link to="/taskdashboard/taskpage/game2" className="btn btn-primary">see more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card bg-light mt-2">
                                <div className="card-body">
                                    <h5 className="card-title">Level Design</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non natus, voluptas laboriosam beatae nam distinctio ipsa error dolores quos neque molestias rerum qui. Iste!</p>
                                    <Link to="/taskdashboard/taskpage/game3" className="btn btn-primary">see more</Link>
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
export default TasksDashboardGame;