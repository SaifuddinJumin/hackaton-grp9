import Navbar from "../components/Navbar/Navbar";
import TaskDetail from "../components/TaskDetail/TaskDetail";
import Comment from "../components/Comment";
import TaskDetailModal from "../components/TaskDetail/TaskDetailModal";
import ChatInput from "../components/ChatInput/ChatInput";
import { Link } from "react-router-dom";

const TaskPageMarket2 = () => {

    return (
        <>
            <Navbar />
            <div className="wrapper container top-gap">
                <div className="row ml-3">
                    <div className="col-md-12">

                        {/* <Link to="/taskdashboard3"><p className="h4">Marketing Services & Product</p></Link> */}
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to={"/"}>Dashboard</Link></li>
                                <li class="breadcrumb-item"><Link to={"/taskdashboard3"}>Marketing</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Record a short video for product advertisement</li>
                            </ol>
                        </nav>

                        <p class="h1 mt-4 mb-4">Record a short video for product advertisement</p>
                        <p class="h5">Description</p>
                        <p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur rem quae! Libero dolor aliquam soluta dolores reprehenderit maiores possimus delectus ullam consectetur.</p>
                        <p class="h5">Attachment</p>
                        <div class="card mb-2">
                            <p class="h6 p-5">No file uploaded yet.</p>
                        </div>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit</button>
                        <TaskDetailModal />
                    </div>

                </div>

                <Comment />
            </div>
            <ChatInput />
        </>
    )
}
export default TaskPageMarket2;