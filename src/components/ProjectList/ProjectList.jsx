import axios from "axios";
import ProjectCard from "../ProjectCard";
import "./ProjectList.css";
import React, { useState, useEffect } from 'react';
import Endpoints from "../../api/Endpoints";

const ProjectList = () => {
    const [categories, setCategories] = useState([]);

    const fetchData = () => {
        axios
            .get(Endpoints.CATEGORY_URL)
            .then(response => setCategories(response.data.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="wrapper">
            <div className="container">
                
                <h1 className="mt-3">Project List</h1>
                <div className="row">
                    {
                        categories.map((task) => <ProjectCard data={task} key={task.catId} />)
                    }
                </div>
            </div >
        </div>
    )
}
export default ProjectList;