import "./JobList.css";
import React, { useState, useEffect } from 'react';

const JobList = () => {

    return (
        <div className="wrapper">
            <div className="container">
                <h1>IT crowd - Tasks List</h1>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card bg-light mt-2">
                            <div className="card-body">
                                <h5 className="card-title">Task 1</h5>
                                <p className="card-text">Short description of task</p>
                                <a href="#" className="btn btn-primary">see more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card bg-light mt-2">
                            <div className="card-body">
                                <h5 className="card-title">Task 1</h5>
                                <p className="card-text">Short description of task</p>
                                <a href="#" className="btn btn-primary">see more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card bg-light mt-2">
                            <div className="card-body">
                                <h5 className="card-title">Task 1</h5>
                                <p className="card-text">Short description of task</p>
                                <a href="#" className="btn btn-primary">see more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card bg-light mt-2">
                            <div className="card-body">
                                <h5 className="card-title">Task 1</h5>
                                <p className="card-text">Short description of task</p>
                                <a href="#" className="btn btn-primary">see more</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div >
        </div>
    )
}
export default JobList;