// Imported React Modules
import React, { useState } from "react";

// Imported Styles
import "./Deposit.css";

const Deposit = ({ users }) => {
  //Users is being pulled by the parent component (App.js)

  //List of form variables to control their state values
  const [depositAmount, setDepositAmount] = useState("");
  const [currentBalance, setCurrentBalance] = useState(0);

  //These three variables control which form is being rendered to the screen
  const [showLogin, setShowLogin] = useState(true);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);

  //This is used to search for the account by the name and password the user provided
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  //Function that controls the form submission making a DEPOSIT-
  const depositHandler = (event) => {
    event.preventDefault();
    let newBalance = Number(currentBalance) + Number(depositAmount);
    setCurrentBalance(newBalance);
    console.log(name, password, newBalance);

    const newArray = users.map((user) => {
      if (user.name == name && user.password == password) {
        console.log(newBalance);
      }
    });
    setShowLogin(false);
    setShowDeposit(false);
    setShowNotFound(false);
    console.log(newArray);
  };

  //Function that controls the form submission for LOGIN-
  const loginHandler = (event) => {
    event.preventDefault();
    let balanceValue = 0;
    let showLoginValue = true;
    let showDepositValue = false;
    let showNotFoundValue = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].name == name && users[i].password == password) {
        balanceValue = users[i].balance;
        showLoginValue = false;
        showDepositValue = true;
        showNotFoundValue = false;
        break;
      } else {
        showLoginValue = false;
        showDepositValue = false;
        showNotFoundValue = true;
      }
    }
    setCurrentBalance(balanceValue);
    setShowLogin(showLoginValue);
    setShowDeposit(showDepositValue);
    setShowNotFound(showNotFoundValue);
  };

  //Function controls the DEPOSIT user input-
  const handleDepositAmountChange = (event) => {
    let firstCharacter = event.target.value.charAt(0);
    if (firstCharacter == "-") {
      return alert("Deposit amount cannot be negitive. Please try again.");
    }
    setDepositAmount(event.target.value);
  };

  //Function controls the NAME from user input-
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  //Function controls the PASSWORD from user input-
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //Function to reset the name and password fields if an account is not found (Try Again Button)
  const clearForm = () => {
    setName("");
    setPassword("");
    setDepositAmount("");
    setShowLogin(true);
    setShowDeposit(false);
    setShowNotFound(false);
  };

  //Function to reset all the input fields for the deposit back to the default
  const resetFields = () => {
    setDepositAmount("");
    setShowLogin(false);
    setShowDeposit(true);
    setShowNotFound(false);
  };

  return (
    <div>
      {showLogin ? (
        <div className="container">
          <div className="card" style={{ maxWidth: 540 + "px" }}>
            <div className="card-header">Deposit Login</div>

            <div className="card-body ">
              <div className="mb-3">
                <label className="form-label">Account Name:</label>
                <input
                  style={{ maxWidth: 250 + "px" }}
                  type="text"
                  className="form-control"
                  id="exampleInputName2"
                  aria-describedby="depositHelp"
                  onChange={handleNameChange}
                  value={name}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input
                  style={{ maxWidth: 125 + "px" }}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  aria-describedby="passwordHelp"
                  onChange={handlePasswordChange}
                  value={password}
                />
              </div>

              <button
                type="submit"
                className="btn btn-secondary"
                //The deposit button is desabled if the deposit amount is equal to zero
                disabled={!name && !password}
                onClick={loginHandler}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      ) : showDeposit ? (
        <div className="container">
          <div className="card" style={{ maxWidth: 540 + "px" }}>
            <div className="card-header">Deposit</div>

            <div className="card-body ">
              <div className="mb-3">
                <p>{`Account Balance: $${currentBalance.toFixed(2)}`}</p>
              </div>

              <div className="mb-3">
                <label for="exampleInputDeposit1" className="form-label">
                  Deposit Amount:
                </label>
                <input
                  style={{ maxWidth: 125 + "px" }}
                  type="number"
                  min=".01"
                  step="0.01"
                  className="form-control"
                  id="exampleInputDeposit1"
                  aria-describedby="depositHelp"
                  onChange={handleDepositAmountChange}
                  value={depositAmount}
                />
              </div>
              <button
                type="submit"
                className="btn btn-secondary"
                //The deposit button is desabled if the deposit amount is equal to zero
                disabled={depositAmount == 0}
                onClick={depositHandler}
              >
                Deposit
              </button>
              <button
                type="submit"
                className="btn btn-secondary rwlogout"
                onClick={clearForm}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : showNotFound ? (
        <div className="container">
          <div className="card" style={{ maxWidth: 540 + "px" }}>
            <div className="card-header">Deposit</div>
            <div className="card-text mt-3">
              <p>
                Sorry, no account was found for the Name and Password provided.
              </p>
            </div>
            <div className="card-body ">
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={clearForm}
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="card" style={{ maxWidth: 540 + "px" }}>
            <div className="card-header">Deposit</div>
            <div className="card-text mt-3">
              <p>{`Updated Account Balance: $${currentBalance.toFixed(2)}`}</p>
              <p>Success! Deposit was received. Thank you.</p>
            </div>
            <div className="card-body ">
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={resetFields}
              >
                Make another Deposit?
              </button>
              <button
                type="submit"
                className="btn btn-secondary rwlogout"
                onClick={clearForm}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Deposit;
