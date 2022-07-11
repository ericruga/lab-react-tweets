
function Tweet(props) {
  return (
    <div className="tweet">
     <p>{props.image}</p>
      

      <div className="body">
        <div className="top">
          <span className="user">
          <p>{props.name}</p>
          <p>{props.handle}</p>
          </span>

          <span className="timestamp"><p>{props.timestamp}</p></span>
        </div>


        <p className="message">
        <p>{props.message}</p>
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
