const CommentBox = (props) => {
    const data = props.text;
    console.log('this is prop data: ' + data)
    return (
        <div className="container">
            <div className='card card-body'>
                {data}
            </div>
            <br />
        </div>
    )
}
export default CommentBox;