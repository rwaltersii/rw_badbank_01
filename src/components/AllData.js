// Imported React Modules
import React from "react";

// Imported Styles
import "./AllData.css";

const AllData = ({ users }) => {
  return (
    <div className="container">
      <div className="card" style={{ maxWidth: 750 + "px" }}>
        <table className="table  table table-striped table-hover ">
          <thead className="table-light">
            <tr className="">
              <th className="th-main" colSpan="5">
                All Data Table
              </th>
            </tr>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">Password</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index + 1}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>${user.balance.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllData;
