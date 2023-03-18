import "./UserList.css";
const UserList = (props) => {
  return (
    <div class="user-list-item-card">
      <div class="username">{props.userName}</div>
      <div class="age"> ({props.userAge} years old) </div>
    </div>
  );
};
export default UserList;
