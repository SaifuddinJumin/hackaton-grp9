import JobCard from "../JobCard";
import "./JobList.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Endpoints from "../../api/Endpoints";

const JobList = () => {
    const [subCategories, setSubCategories] = useState([]);

    const fetchData = () => {
        axios
            .get(Endpoints.SUB_CATEGORY_URL)
            .then(response => setSubCategories(response.data.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="wrapper">
            <div className="container">
                <h1>Project 1 - JobList</h1>

                <div className="row">
                    {
                        subCategories.map((task) => <JobCard data={task} key={task.subId} />)
                    }
                </div>
            </div >
        </div>
    )
}
export default JobList;