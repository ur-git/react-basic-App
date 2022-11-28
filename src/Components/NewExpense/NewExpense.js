import "./NewExpense.css";
import ExpenseForm from "./ExpenseFrom";
const NewExpense = (props) => {
  const saveFormDataHandler = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.random.toString(),
    };
    props.getExpenseData(data);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitForm={saveFormDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
