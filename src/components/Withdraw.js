// Imported React Modules
import React, { useState } from "react";

// Imported Styles

const Withdraw = ({ users }) => {
  //List of form variables to control their state values
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [currentBalance, setCurrentBalance] = useState(users[0].balance);

  //This will show either the input form or the Add Another message
  const [show, setShow] = useState(true);
  //This is to determin if an account was found for the given user and password
  const [foundAccount, setFoundAccount] = useState(null);

  //Function that controls the form submission-
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(currentBalance);
    let amountWithdrawn = Number(currentBalance) - Number(withdrawAmount);
    console.log(amountWithdrawn);
    setCurrentBalance(amountWithdrawn);
    setShow(false);
  };

  //Function controls the Deposit user input-
  const handleWithdrawAmountChange = (event) => {
    let firstCharacter = event.target.value.charAt(0);
    if (firstCharacter == "-") {
      return alert("Withdraw amount cannot be negitive. Please try again.");
    } else if (event.target.value > currentBalance) {
      return alert(
        `Withdraw amount exceeds balance of $${currentBalance} . Please reduce withdraw amount to less than or equal to your current balance.`
      );
    }
    setWithdrawAmount(event.target.value);
  };

  //Function to reset all the input fields back to their defaults
  const resetFields = () => {
    setWithdrawAmount("");
    setShow(true);
  };

  return (
    <div>
      {show ? (
        <div className="container">
          <div className="card" style={{ maxWidth: 540 + "px" }}>
            <div className="card-header">Withdraws</div>

            <div className="card-body ">
              <div className="mb-3">
                <p>{`Account Balance: $${currentBalance.toFixed(2)}`}</p>
              </div>

              <div className="mb-3">
                <label for="exampleInputWithdraw1" className="form-label">
                  Withdraw Amount:
                </label>
                <input
                  style={{ maxWidth: 125 + "px" }}
                  type="number"
                  min=".01"
                  step="0.01"
                  className="form-control"
                  id="exampleInputWithdraw1"
                  aria-describedby="withdrawHelp"
                  onChange={handleWithdrawAmountChange}
                  value={withdrawAmount}
                />
              </div>

              <button
                type="submit"
                className="btn btn-secondary"
                //The deposit button is desabled if the deposit amount is equal to zero
                disabled={withdrawAmount == 0}
                onClick={submitHandler}
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="card" style={{ maxWidth: 540 + "px" }}>
            <div className="card-header">Withdraw</div>
            <div className="card-text mt-3">
              <p>{`Updated Account Balance: $${currentBalance.toFixed(2)}`}</p>
              <p>Success! Withdraw was received. Thank you.</p>
            </div>
            <div className="card-body ">
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={resetFields}
              >
                Make another Withdraw?
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Withdraw;
