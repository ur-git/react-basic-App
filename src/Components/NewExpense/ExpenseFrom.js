import "./ExpenseFrom.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="0.0" step="0.01" />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
