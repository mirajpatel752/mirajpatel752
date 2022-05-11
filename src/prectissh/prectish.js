import { Button } from "antd";
import React, { useState } from "react";
import Showfild from "./showfild";
import UserTable from "./table";

const   Prentice = () => {
  const usersData = [];
  const initialFormState = { id: null, name: "", username: "" };
  const [header, setHader] = useState(false);
  const [addblog, setAddblog] = useState(false);
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser(user);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div style={{ margin: "10px" ,display:'flex',justifyContent:"center",alignItems:'center',height:'100vh'}}>
      <div>
        <div>
          <Button onClick={() => setHader(!header)} type="primary">
            BLOG
          </Button>
        </div>
        <div className="flex-row">
          <div className="flex-large">
            {header && (
              <div>
                <br />
                <Button onClick={() => setShow(!show)} type="primary">
                  {editing ? "Edit blog" : "Add Blog"}
                </Button>

                {show && (
                  <Showfild
                    setAddblog={setAddblog}
                    editing={editing}
                    setEditing={setEditing}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    updateUser={updateUser}
                    addUser={addUser}
                  />
                )}
              </div>
            )}
          </div>
          {addblog && (
            <div className="flex-large">
              <UserTable
                users={users}
                editRow={editRow}
                deleteUser={deleteUser}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prentice;
