
import "./ExpenseForm.css";

const ExpenseForm = () => {
 

  const titleChange = (event) => console.log(event.target.value)
  const amountChange= (event) => console.log(event.target.value)
  const dateChange = (event) => console.log(event.target.value)

  return (
    <form >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input
            type="text"
           
            onChange={titleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input
            type="number"
           
            onChange={amountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input
            type="date"
          
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
