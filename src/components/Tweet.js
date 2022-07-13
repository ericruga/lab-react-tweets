import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({tweet}) {
  const {user, timestamp, message} = tweet;
  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <User userData={user.name} />
          <User userHandle={user.handle} />
          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />   
        <Actions />
        </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>

  );
}

export default Tweet;
