import axios from 'axios';
import React, { useState } from 'react';
// import Endpoints from '../../api/Endpoints';
import Endpoints from '../../api/Endpoints';

const ProjectsPageModal = () => {
    const [taskDetail, setTaskDetail] = useState({
        taskName: "",
        description: "",
        content: ""
    })

    const onChangeHandler = (event) => {
        setTaskDetail({
            ...taskDetail,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        axios
            .put(Endpoints.TASK_EDIT_PUT)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Create new team</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <form onSubmit={onSubmitHandler}>
                            <div className="form-group">
                                <label htmlFor="">Team name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="taskName"
                                    onChange={onChangeHandler}
                                    value={taskDetail.taskName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Short description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="description"
                                    onChange={onChangeHandler}
                                    value={taskDetail.description}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Role</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="content"
                                    onChange={onChangeHandler}
                                    value={taskDetail.content}
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
export default ProjectsPageModal;