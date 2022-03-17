import * as React from "react";
import { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Withdraw from "./Withdraw";

test("add withdraw amount", () => {
  const users = [
    {
      name: "Peter Parker",
      email: "peter@mit.edu",
      password: "peter001",
      balance: 100.0,
    },
  ];

  const { getAllByText, getByText, getByLabelText } = render(
    <Withdraw users={users} />
  );
  getByText("Account Balance: $100.00");
});
