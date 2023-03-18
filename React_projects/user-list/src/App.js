import React from "react";
import Form from "./components/Form/Form";
import "./components/UI/Card/CenterItem.css";
import UserList from "./components/UserList/UserList";
import Card from "./components/UI/Card/Card";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const usersList = users.map((user) => {
    return (
      <UserList
        key={user.id}
        userName={user.Name}
        userAge={user.Age}
      ></UserList>
    );
  });

  const addNewUser = (user) => {
    setUsers((preList) => [user, ...preList]);
  };

  return (
    <div>
      <div className="centerAlign">
        <Form allUsers={users} onAddUser={addNewUser}></Form>
        <Card>{usersList}</Card>
      </div>
    </div>
  );
}

export default App;
