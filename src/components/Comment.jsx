import axios from "axios";
import { useState } from "react";
import Endpoints from "../api/Endpoints";

const Comment = () => {
    const [comment, setComment] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios
            .post(Endpoints.COMMENT_POST, comment)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    const onChangeHandler = (event) => {
        setComment({
            ...comment, [event.target.comment]: event.target.value
        })
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group container">
                    <input
                        type="text"
                        name="comment"
                        className="form-control border mt-2"
                        onChange={onChangeHandler}
                        placeholder="Write comment"
                    />
                    <button
                        type="submit"
                        className="btn btn-primary mt-2">
                        Post Comment
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Comment;