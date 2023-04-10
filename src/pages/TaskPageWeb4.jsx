import Navbar from "../components/Navbar/Navbar";
import TaskDetail from "../components/TaskDetail/TaskDetail";
import Comment from "../components/Comment";
import TaskDetailModal from "../components/TaskDetail/TaskDetailModal";

const TaskPageWeb4 = () => {

    return (
        <>
            <Navbar />
            <div className="wrapper container">
                <div className="row ml-3">
                    <div className="col-md-12">
                        <p className="h4">Web Development</p>
                        <p class="h1 mt-4 mb-4">Backend database development with firebase</p>
                        <p class="h5">Description</p>
                        <p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro totam vero incidunt, optio tempore nam similique corrupti expedita eveniet voluptas molestias laborum aut aliquid quae, error quaerat amet dolore. Porro numquam repellat reiciendis dolor labore qui molestias voluptates, doloribus quod at minima cumque, consequuntur explicabo. Eos nam alias accusamus temporibus, libero porro iure, quod, explicabo debitis voluptatum pariatur eaque error tempore. Neque laudantium id laborum porro quidem vitae odit iure!
                            <br />
                            •	REST API endpoint<br />
                            •	Database deployment<br />
                            •	Error handling<br />
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
        </>
    )
}
export default TaskPageWeb4;