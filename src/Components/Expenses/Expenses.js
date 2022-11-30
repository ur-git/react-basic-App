import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [inputYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (year) => {
    // console.log(year);
    setFilterYear(year);
  };

  const filterExpenses = props.items.filter((obj) => {
    return obj.date.getFullYear().toString() === inputYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterChange={filterChangeHandler}
          defaultYear={inputYear}
        ></ExpensesFilter>
        {filterExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
