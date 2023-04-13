import Navbar from "../components/Navbar/Navbar";
import TaskDetail from "../components/TaskDetail/TaskDetail";
import Comment from "../components/Comment";
import TaskDetailModal from "../components/TaskDetail/TaskDetailModal";
import ChatInput from "../components/ChatInput/ChatInput";
import { Link } from "react-router-dom";

const TaskPageGame4 = () => {

    return (
        <>
            <Navbar />
            <div className="wrapper container top-gap">
                <div className="row ml-3">
                    <div className="col-md-12">

                        {/* <Link to="/taskdashboard2"><p className="h4">Game Design</p></Link> */}
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to={"/"}>Dashboard</Link></li>
                                <li class="breadcrumb-item"><Link to={"/taskdashboard2"}>Game Design</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Clean up gamers !</li>
                            </ol>
                        </nav>

                        <p class="h1 mt-4 mb-4">Clean up gamers !</p>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non natus, voluptas laboriosam beatae nam distinctio ipsa error dolores quos neque molestias rerum qui. Iste!</p>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <input type="checkbox" aria-label="Checkbox for following text input" />
                                </div>
                            </div>
                            <p type="text" class="form-control" aria-label="Text input with checkbox">Sweep the lobby</p>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <input type="checkbox" aria-label="Checkbox for following text input" />
                                </div>
                            </div>
                            <p type="text" class="form-control" aria-label="Text input with checkbox">Wipe the tables</p>
                        </div><div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <input type="checkbox" aria-label="Checkbox for following text input" />
                                </div>
                            </div>
                            <p type="text" class="form-control" aria-label="Text input with checkbox">Wipe the glass doors</p>
                        </div><div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <input type="checkbox" aria-label="Checkbox for following text input" />
                                </div>
                            </div>
                            <p type="text" class="form-control" aria-label="Text input with checkbox">Vaccum the prayer room</p>
                        </div>

                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit</button>
                        <TaskDetailModal />
                    </div>

                </div>
                <hr />
                <Comment />
            </div>
            <ChatInput />
        </>
    )
}
export default TaskPageGame4;