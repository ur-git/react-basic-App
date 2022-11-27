// Component in React is just a Javascript Function which returns JSX
import React, { useState } from "react";

import "./ExpenseItem.css"; //styling components
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //one of the react hook
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // console.log(props.title);
    setTitle('hey')
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

// export to use this component outside this file
export default ExpenseItem;
