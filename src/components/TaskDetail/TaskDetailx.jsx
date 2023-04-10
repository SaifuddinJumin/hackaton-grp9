import axios from "axios";
import React, { useState, useEffect } from 'react';
import Comment from "../Comment";
import TaskDetailModal from "./TaskDetailModal";
import CircularProgressTracker from "../CircularProgressTracker";
// import "@/../../src/components/TaskDetail/";
import "./TaskDetail.css";

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
            <div className="row">
                <div className="col-md-7">
                    <h2>Task Name</h2>
                    <p>Description</p>
                    <p>Content</p>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit</button>
                    <TaskDetailModal />
                </div>
                <div className="col-md-5">
                    <CircularProgressTracker />
                </div>
            </div>
            <Comment />
        </div>
    )
}
export default TaskDetail;