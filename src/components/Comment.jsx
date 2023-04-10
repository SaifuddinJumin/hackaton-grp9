import axios from "axios";
import { useState } from "react";
import Endpoints from "../api/Endpoints";
import Commenter from "./CommentList";

const Comment = () => {


    // for comment
    const [state, setState] = useState([])
    const [text, setTexts] = useState([])

    const onChangeValue = (e) => {
        setState(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault();
        setTexts(prev => [...prev, { id: state.length, content: state }])
    }


    return (
        <div class="container mt-5">
            <form onSubmit={submit} >
                <div className="form-group container">
                    <p class="h4">Comment:</p>
                    {
                        console.log(`array ${text}`)
                    }

                    {
                        text.map((data) => <Commenter data={data} />)
                    }

                    
                        <input
                            type="text"
                            name="comment"
                            className="form-control border mt-2"
                            onChange={onChangeValue}
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