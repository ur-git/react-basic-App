import React, { useState } from "react";
import "./ExpenseFrom.css";

const ExpenseForm = () => {
  // const [inputtitle, setEnteredTitle] = useState("");
  // const [inputAmount, setEnteredAmount] = useState("");
  // const [inputDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    inputtitle: "",
    inputAmount: "",
    inputDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput({ ...userInput, inputtitle: event.target.value });
  };

  const amountChangeHandler = (event) => {
    setUserInput({ ...userInput, inputAmount: event.target.value });
  };

  const dateChangeHandler = (event) => {
    setUserInput({ ...userInput, inputDate: event.target.value });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.0"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
