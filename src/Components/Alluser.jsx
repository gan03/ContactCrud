import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../Service/api";
import { Link } from "react-router-dom";
// import Edituser from "./Edituser";
const Alluser = () => {
  const [user, setUser] = useState([]);
  const getAlluser = async () => {
    const response = await getUsers();

    setUser(response.data);
  };
  const Deletedata = async (id) => {
    await deleteUser(id);
    getAlluser();
  };
  useEffect(() => {
    getAlluser();
  }, []);
  // console.log("user", user);
  return (
    <div>
      <h1>Alluser</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Contact</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, id) => (
            <tr key={id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.Contact}</td>
              <td>{user.email}</td>
              <Link to={`/edit/${user.id}`}>
                <button
                  className="btn btn-primary"
                  style={{ marginRight: "10px" }}
                >
                  Edit
                </button>
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => Deletedata(user.id)}
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alluser;
