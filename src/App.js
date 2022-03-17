// Imported React Modules
import React from "react";
import { BrowserRouter as BRouter, Routes, Route } from "react-router-dom";

// Imported Styles
import "./App.css";

// Imported Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import AllData from "./components/AllData";

function App() {
  //This is an array of users for development
  const users = [
    {
      name: "Peter Parker",
      email: "peter@mit.edu",
      password: "peter001",
      balance: 146.12,
    },
    {
      name: "David Banner",
      email: "david@mit.edu",
      password: "david001",
      balance: 256.56,
    },
    {
      name: "Bruce Wayne",
      email: "bruce@mit.edu",
      password: "bruce001",
      balance: 320.85,
    },
  ];

  return (
    <BRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/createaccount"
            element={<CreateAccount users={users} />}
          />
          <Route path="/deposit" element={<Deposit users={users} />} />
          <Route path="/withdraw" element={<Withdraw users={users} />} />
          <Route path="/alldata" element={<AllData users={users} />} />
        </Routes>
      </div>
    </BRouter>
  );
}

export default App;
