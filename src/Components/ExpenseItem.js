// Component in React is just a Javascript Function which returns JSX
import "./ExpenseItem.css"; //styling components
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {  
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

// export to use this component outside this file
export default ExpenseItem;
