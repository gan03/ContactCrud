import { useState } from "react";
import { addUser } from "../Service/api";
import { useHistory } from "react-router-dom";

const Adduser = () => {
  const initialState = {
    name: "",
    username: "",
    email: "",
    Contact: "",
  };
  const [user, setUser] = useState(initialState);
  // console.log(user);
  const { name, username, email, Contact } = user;
 
  let history = useHistory();
  const onchangeValue = (e) => {
    // console.log("name",e.target.name);
    // console.log("value",e.target.value);

    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(name,username,email,Contact);
   console.log(user);

  const addUserDetails = async (e) => {
    e.preventDefault();
    await addUser(user);
    history.push("./all");
  };

  return (
    <div>
      <h3>Add User</h3>
      <form autoComplete="off">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
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
            name="email"
            onChange={(e) => onchangeValue(e)}
          />
        </div>
        <button className="btn btn-primary" onClick={(e) => addUserDetails(e)}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default Adduser;
