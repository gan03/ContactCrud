import { useEffect, useState } from "react";
import {  editUser, getUsers } from "../Service/api";
import { useHistory, useParams } from "react-router-dom";

const Edituser = () => {
  const initialState = {
    name: "",
    username: "",
    email: "",
    Contact: "",
  };
  const [user, setUser] = useState(initialState);
  const { name, username, email, Contact } = user;
  const { id } = useParams();
  let history = useHistory();
  // console.log("what is  in id", id.id);
  const onchangeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);
  // const addUserDetails = async () => {
  //   await addUser(user);
  //   history.push("./all");
  // };
  useEffect(() => {
    loadUserDetails();
    // eslint-disable-next-line
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };
  const editUserDetails = async(e) => {
    e.preventDefault()
     await editUser(id, user);
    history.push('/all');
}

  return (
    <div>
      <h3>Edit User</h3>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            id="text"
            name="name"
            onChange={(e) => onchangeValue(e)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>User Name:</label>
          <input
            type="text"
            className="form-control"
            id="text"
            name="username"
            value={username}
            onChange={(e) => onchangeValue(e)}
          />
        </div>
        <div className="form-group">
          <label>Contact no:</label>
          <input
            type="number"
            className="form-control"
            id="number"
            name="Contact"
            value={Contact}
            onChange={(e) => onchangeValue(e)}
          />
        </div>
        <div className="form-group">
          <label>Email address:</label>
          <input
            type="email"
            value={email}
            className="form-control"
            id="email"
            name="email"
            onChange={(e) => onchangeValue(e)}
          />
        </div>
        <button className="btn btn-primary" onClick={(e) => editUserDetails(e)}>
          Edit User
        </button>
      </form>
    </div>
  );
};

export default Edituser;
