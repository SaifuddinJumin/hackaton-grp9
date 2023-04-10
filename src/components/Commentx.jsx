import axios from "axios";
import { useState,useEffect } from "react";
import Endpoints from "../api/Endpoints";
import CommentBox from "./CommentBox";

const Comment = () => {
    const [commentBox, setCommentBox] = useState([])
    const [comment, setComment] = useState("");

    useEffect(()=>{

    },[commentBox])

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // axios
        //     .post(Endpoints.COMMENT_POST, comment)
        //     .then(response => console.log(response))
        //     .catch(error => console.log(error))

        console.log(comment)
        const newComment = <CommentBox text={comment}/>
        setCommentBox([...commentBox, newComment]);
        console.log(newComment)
        console.log(CommentBox.length)   
    }




    const onChangeHandler = (event) => {
        // setComment({
        //     ...comment, [event.target.comment]: event.target.value
        // })

        setComment(event.target.value)
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
            { 
                commentBox.map((data, index) => 
                    <CommentBox text={data} key={index}/>
                )
            }

        </div>
    )
}
export default Comment;