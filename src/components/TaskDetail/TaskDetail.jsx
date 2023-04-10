import axios from "axios";
import React, { useState, useEffect } from 'react';
import Comment from "../Comment";
import TaskDetailModal from "./TaskDetailModal";
import CircularProgressTracker from "../CircularProgressTracker";
// import "./TaskDetail.css";



const TaskDetail = () => {
    const [task, setTask] = useState({
        taskName: "",
        description: "",
        content: ""
    })

    const fetchData = () => {
        axios
            .get("")
            .then(response => setTask(response.data.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="wrapper">
            <div className="row ml-3">
                <div className="col-md-12">
                    <p class="h1 mt-4 mb-4">Create CRUD function for inventory</p>
                    <p class="h5">Description</p>
                    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sapiente dolores quos ad fugiat, obcaecati quae? Obcaecati sequi quis corrupti ipsa voluptas voluptatibus. Velit omnis suscipit, pariatur quos possimus magni!</p>
                    <p class="h5">Attachment</p>
                    <div class="card mb-2">
                        <p class="h6 p-5">No file uploaded yet.</p>
                    </div>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit</button>
                    <TaskDetailModal />
                </div>
               
            </div>

            <Comment />
        </div>



        // <div className="wrapper">
        //     <div className="row">
        //         <div className="col-md-7">
        //             <h2>Task Name</h2>
        //             <p>Description</p>
        //             <p>Content</p>
        //             <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit</button>
        //             <TaskDetailModal />
        //         </div>
        //         <div className="col-md-5">
        //             <CircularProgressTracker />
        //         </div>
        //     </div>
        //     <Comment />
        // </div>
    )
}
export default TaskDetail;