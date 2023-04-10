import "./ProjectList.css";
import React from 'react';
import { Link } from "react-router-dom";
import ProjectsPageModal from "./ProjectsPageModal";

const ProjectList = () => {

    return (
        <div className="wrapper">
            <div className="container">

                <h1 className="mt-3">Project Teams</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card bg-light mt-2">
                            <div className="card-body">
                                <h5 className="card-title">IT crowd</h5>
                                <p className="card-text">Web development</p>
                                <p className="card-text">Role: Coders</p>
                                <Link to="/taskdashboard1" className="btn btn-primary">Go to tasks</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card bg-light mt-2">
                            <div className="card-body">
                                <h5 className="card-title">Marketing Department</h5>
                                <p className="card-text">Short description of task</p>
                                <p className="card-text">Role: Fun people</p>
                                <Link to="/taskdashboard2" className="btn btn-primary">Go to tasks</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card bg-light mt-2">
                            <div className="card-body">
                                <h5 className="card-title">Finance department</h5>
                                <p className="card-text">Short description of task</p>
                                <p className="card-text">Role: bling-bling</p>
                                <Link to="/taskdashboard3" className="btn btn-primary">Go to tasks</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 m-5 p-4">
                        <button type="button" class="btn btn-light border" data-toggle="modal" data-target="#exampleModal">+</button>
                        <ProjectsPageModal />
                    </div>

                </div>
            </div >
        </div>
    )
}
export default ProjectList;