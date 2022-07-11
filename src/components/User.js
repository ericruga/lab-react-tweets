const User = ({userData, userHandle}) => {
    return (
         <span className="user">
             <span className="name">{userData}</span>
             <span className="handle">{userHandle}</span>
         </span>
    )
}

export default User;