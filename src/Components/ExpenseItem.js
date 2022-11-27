// Component in React is just a Javascript Function which returns JSX
import "./ExpenseItem.css"; //styling components
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

// export to use this component outside this file
export default ExpenseItem;
