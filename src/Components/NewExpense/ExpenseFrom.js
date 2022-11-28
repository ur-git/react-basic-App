import React, { useState } from "react";
import "./ExpenseFrom.css";

const ExpenseForm = (props) => {
  const [inputTitle, setEnteredTitle] = useState("");
  const [inputAmount, setEnteredAmount] = useState("");
  const [inputDate, setEnteredDate] = useState("");

  //:for multiple state update at once
  // const [userInput, setUserInput] = useState({
  //   inputtitle: "",
  //   inputAmount: "",
  //   inputDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // way to update state when you depend on previous state values
    // setUserInput((prevState) => {
    //   return { ...prevState, inputtitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // way to update state when you depend on previous state values
    // setUserInput({ ...userInput, inputAmount: event.target.value });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // way to update state when you depend on previous state values
    // setUserInput({ ...userInput, inputDate: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSubmitForm(expenseData)

    // console.log(expenseData);

    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={inputDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
