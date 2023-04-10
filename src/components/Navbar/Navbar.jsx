import axios from "axios";
import Chat from "../Chat";
import "./Navbar.css";
import React, { useState, useEffect } from 'react';
import Endpoints from "../../api/Endpoints";
import { Link } from "react-router-dom";
import ChuChul from "./ChuChul";

const Navbar = () => {
    // const [projectNumber, setProjectNumber] = useState([]);
    const hexColour = ChuChul();

    // const fetchData = () => {
    //     axios
    //         .get(Endpoints.CATEGORY_URL)
    //         .then(response => setProjectNumber(response.data.data))
    //         .catch(error => console.log(error))
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    console.log(hexColour);

    return (

        <nav class="navbar navbar-expand-lg navbar-dark" style={{zIndex: 10, backgroundColor: hexColour}}>
            <Link class="navbar-brand" to="/">ProCrass</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Profile
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">My Profile</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-light bg-danger" href="#">Logout</a>
                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Projects
                        </a>
                        <div class="dropdown-menu">
                            <Link class="dropdown-item" to="/">All Projects</Link>
                            <div class="dropdown-divider"></div>
                            <Link class="dropdown-item" to="/taskdashboard1">💻 IT crowd</Link>
                            <Link class="dropdown-item" to="/taskdashboard2">🎁 Marketing department</Link>
                            <Link class="dropdown-item" to="/taskdashboard3">💹 Finance department</Link>
                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Chat
                        </a>
                        <div class="dropdown-menu">
                            <Chat />
                        </div>
                    </li>

                    {/* <li class="nav-item ">
                        <a class="nav-link" href="#">Chat <span class="sr-only">(current)</span></a>
                    </li> */}

                </ul>

            </div>
        </nav>
    )
}
export default Navbar;