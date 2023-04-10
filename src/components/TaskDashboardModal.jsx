import axios from 'axios';
import React, { useState } from 'react';
// import Endpoints from '../../api/Endpoints';
import Endpoints from '../api/Endpoints';

const TaskDashboardModal = (props) => {

    const {taskDetail, setTaskDetail, onSubmit} = props
    


    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setTaskDetail({...taskDetail, [name]: value})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if(taskDetail.taskName !== '')
        {   
        onSubmit();
        }

        // axios
        //     .put(Endpoints.TASK_EDIT_PUT)
        //     .then(response => console.log(response))
        //     .catch(error => console.log(error))
    }

    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Create new task</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <form onSubmit={onSubmitHandler}>
                            <div className="form-group">
                                <label htmlFor="">Task Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="taskName"
                                    onChange={onChangeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="taskDescription"
                                    onChange={onChangeHandler}
                                />
                            </div>
                            <button type="submit" class="btn btn-primary">Create new</button>
                        </form>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default TaskDashboardModal;