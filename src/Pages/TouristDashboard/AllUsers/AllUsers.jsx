import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "keep-react";
import Swal from "sweetalert2";
import { FaUser } from "react-icons/fa";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://tourist-guide-server-nine.vercel.app/users")
      .then((data) => setUsers(data.data));
  }, []);

  const handleMakeAdmine = (user) => {
    axios.patch(`https://tourist-guide-server-nine.vercel.app/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="m-4 p-4 bg-blue-100">
      <div className="flex justify-between text-2xl font-semibold">
        <h2>All Users</h2>
        <h2>Total Users: {users.length} </h2>
      </div>

      <Table border="1" className="mt-5 text-center">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
        {users.map((user) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              {user.role === "admin" ? (
                <span className="text-green-600 font-semibold">Admin</span>
              ) : (
                <button onClick={() => handleMakeAdmine(user)}>
                  <FaUser className="text-xl" />
                </button>
              )}
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default AllUsers;
