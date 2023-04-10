import axios from 'axios';
import React, { useState } from 'react';
// import Endpoints from '../../api/Endpoints';
import Endpoints from '../../api/Endpoints';

const ProjectsPageModal = (props) => {

    const {projectDetail, setProjectDetail, onSubmit, modalRef} = props
    
    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setProjectDetail({...projectDetail, [name]: value})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        if(projectDetail.projectName !== '')
        {   
        onSubmit();
        modalRef.current.click();
        }
        // axios
        //     .put(Endpoints.TASK_EDIT_PUT)
        //     .then(response => console.log(response))
        //     .catch(error => console.log(error))
    }

    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={modalRef}>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Create new project</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <form onSubmit={onSubmitHandler}>
                            <div className="form-group">
                                <label htmlFor="">Project name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="projectName"
                                    onChange={onChangeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Short description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="projectDescription"
                                    onChange={onChangeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Role</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="projectRole"
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
export default ProjectsPageModal;