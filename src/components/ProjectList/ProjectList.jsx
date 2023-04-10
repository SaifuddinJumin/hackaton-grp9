import "./ProjectList.css";
import React from 'react';
import { Link } from "react-router-dom";
import ProjectsPageModal from "./ProjectsPageModal";

import { useState, useRef } from "react";
import ProjectDetail from "./ProjectDetails";

const ProjectList = () => {
    const modalRef = useRef(null)
    const [projectDetails, setProjectDetails] = useState([])
    const [projectDetail, setProjectDetail] = useState({
        projectName: '',
        projectDescription: '',
        projectRole:''
    });

    const updateProjects = () =>{
        projectDetails.push(projectDetail)
        
        const newProjectDetail = {...projectDetail}
        setProjectDetail(newProjectDetail)
    }

    return (
        <div className="wrapper">
            <div className="container">

                <h1 className="mt-3">Project Teams</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card bg-light mt-2">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Web Development</h5>
                                <p className="card-text ">Web application for warehouse inventory.</p>
                                <p className="card-text badge badge-success align-self-center">Role: IT Crowd</p>
                                <Link to="/taskdashboard1" className="btn btn-primary btn-block">Go to tasks</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card bg-light mt-2">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Game Design</h5>
                                <p className="card-text">Sharing idea among developer team</p>
                                <p className="card-text badge badge-success align-self-center">Role: Fun people</p>
                                <Link to="/taskdashboard2" className="btn btn-primary btn-block">Go to tasks</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card bg-light mt-2">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">Marketing Services & Product</h5>
                                <p className="card-text">Make posters & video advertise on social media</p>
                                <p className="card-text badge badge-success align-self-center">Role: Sales</p>
                                <Link to="/taskdashboard3" className="btn btn-primary btn-block">Go to tasks</Link>
                            </div>
                        </div>
                    </div>

                    {
                        projectDetails.map((data, index) =>
                        <ProjectDetail data={data} key={index}/>
                        )
                    }

                    <div className="col-md-2 m-5 p-4">
                        <button type="button" class="btn btn-light border" data-toggle="modal" data-target="#exampleModal" >+</button>
                        <ProjectsPageModal projectDetail={projectDetail} setProjectDetail={setProjectDetail} onSubmit={updateProjects} modalRef={modalRef}/>
                    </div>

                </div>
            </div >
        </div>
    )
}
export default ProjectList;