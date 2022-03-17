// Imported React Modules
import React, { useState } from "react";

// Imported Styles

const Deposit = ({ users }) => {
  //Users is being pulled by the parent component (App.js)

  //List of form variables to control their state values
  const [depositAmount, setDepositAmount] = useState("");
  const [currentBalance, setCurrentBalance] = useState(users[0].balance);

  //This will show either the input form or the Add Another message
  const [show, setShow] = useState(true);

  //This is to determin if an account was found for the given user and password
  const [foundAccount, setFoundAccount] = useState(null);

  //Function that controls the form submission-
  const submitHandler = (event) => {
    event.preventDefault();
    let amountDeposited = Number(currentBalance) + Number(depositAmount);
    console.log(amountDeposited);
    setCurrentBalance(amountDeposited);
    // users.push(deposit)
    setShow(false);
  };

  //Function controls the Deposit user input-
  const handleDepositAmountChange = (event) => {
    let firstCharacter = event.target.value.charAt(0);
    if (firstCharacter == "-") {
      return alert("Deposit amount cannot be negitive. Please try again.");
    }
    setDepositAmount(event.target.value);
  };

  //Function to reset all the input fields back to their defaults
  const resetFields = () => {
    setDepositAmount("");
    setShow(true);
  };

  return (
    <div>
      {show ? (
        <div className="container">
          <div className="card" style={{ maxWidth: 540 + "px" }}>
            <div className="card-header">Deposit</div>

            <div className="card-body ">
              <div className="mb-3">
                <p>{`Account Balance: $${currentBalance.toFixed(2)}`}</p>
              </div>

              <div className="mb-3">
                <label className="form-label">Deposit Amount:</label>
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
                onClick={submitHandler}
              >
                Deposit
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Deposit;
