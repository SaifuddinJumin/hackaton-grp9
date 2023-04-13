import Navbar from "../components/Navbar/Navbar";
import TaskDetail from "../components/TaskDetail/TaskDetail";
import Comment from "../components/Comment";
import TaskDetailModal from "../components/TaskDetail/TaskDetailModal";
import ChatInput from "../components/ChatInput/ChatInput";
import { Link } from "react-router-dom";

const TaskPageWeb2 = () => {

    return (
        <>
            <Navbar />
            <div className="wrapper container top-gap">
                <div className="row ml-3">
                    <div className="col-md-12">

                        {/* <Link to="/taskdashboard1"><p className="h4">Web Development</p></Link> */}
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to={"/"}>Dashboard</Link></li>
                                <li class="breadcrumb-item"><Link to={"/taskdashboard1"}>Web Development</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Make a connection between react and firebase</li>
                            </ol>
                        </nav>

                        <p class="h1 mt-4 mb-4">Make a connection between react and firebase</p>
                        <p class="h5">Description</p>
                        <p class="lead">Accusantium sapiente dolores quos ad fugiat, obcaecati quae? Lorem ipsum dolor sit amet consectetur adipisicing elit.  Obcaecati sequi quis corrupti ipsa voluptas voluptatibus. Velit omnis suscipit, pariatur quos possimus magni!Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eligendi.
                        </p>
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
export default TaskPageWeb2;