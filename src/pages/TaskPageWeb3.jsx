import Navbar from "../components/Navbar/Navbar";
import TaskDetail from "../components/TaskDetail/TaskDetail";
import Comment from "../components/Comment";
import TaskDetailModal from "../components/TaskDetail/TaskDetailModal";

const TaskPageWeb3 = () => {

    return (
        <>
            <Navbar />
            <div className="wrapper container">
                <div className="row ml-3">
                    <div className="col-md-12">
                        <p className="h4">Web Development</p>
                        <p class="h1 mt-4 mb-4">Create login and registration page</p>
                        <p class="h5">Description</p>
                        <p class="lead">Possimus maxime neque quas expedita sit voluptatibus quasi dignissimos. Nostrum quia laborum optio laudantium ullam, inventore quae possimus incidunt dolor numquam esse quibusdam nesciunt reiciendis, voluptate voluptas nemo dignissimos, placeat vero accusantium ex necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
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
        </>
    )
}
export default TaskPageWeb3;