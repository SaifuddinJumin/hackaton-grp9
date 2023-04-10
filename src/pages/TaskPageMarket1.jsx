import Navbar from "../components/Navbar/Navbar";
import TaskDetail from "../components/TaskDetail/TaskDetail";
import Comment from "../components/Comment";
import TaskDetailModal from "../components/TaskDetail/TaskDetailModal";
import ChatInput from "../components/ChatInput/ChatInput";

const TaskPageMarket1 = () => {

    return (
        <>
            <Navbar />
            <div className="wrapper container">
                <div className="row ml-3">
                    <div className="col-md-12">
                        <p className="h4">Marketing Services & Product</p>
                        <p class="h1 mt-4 mb-4">Make a poster for 2025 November sales</p>
                        <p class="h5">Description</p>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus earum sed, illo tenetur perspiciatis nesciunt nulla, beatae placeat fugit dicta atque libero numquam quidem obcaecati quo eos, culpa dolorum repellendus! Sed, pariatur!</p>
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
export default TaskPageMarket1;