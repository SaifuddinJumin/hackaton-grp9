const Commenter = (props) => {
    const { content } = props.data;
    return (
     
        <div class="card mt-2">
          <div class="card-body py-2">
            <p class="h7">Iqbal Haziq</p>
            <p class="lead pl-5 py-0">{content}</p>
            <div class="card-footer text-muted py-0">Posted: just now</div>
          </div>
        </div>
      
    );
  };
  export default Commenter;