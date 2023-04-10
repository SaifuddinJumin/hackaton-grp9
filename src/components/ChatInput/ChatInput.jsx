import "./ChatInput.css"

const ChatInput = () => {
    return (
        <div>
            <div className="chatInput">
                <input type="text" class="form-control" id="chatInput" placeholder="Chat here"></input>
            </div>
        </div>
    )
}
export default ChatInput;