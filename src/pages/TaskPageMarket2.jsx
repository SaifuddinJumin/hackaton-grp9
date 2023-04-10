import Navbar from "../components/Navbar/Navbar";
import TaskDetail from "../components/TaskDetail/TaskDetail";
import Comment from "../components/Comment";
import TaskDetailModal from "../components/TaskDetail/TaskDetailModal";

const TaskPageMarket2 = () => {

    return (
        <>
            <Navbar />
            <div className="wrapper container">
                <div className="row ml-3">
                    <div className="col-md-12">
                        <p className="h4">Marketing Services & Product</p>
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
        </>
    )
}
export default TaskPageMarket2;