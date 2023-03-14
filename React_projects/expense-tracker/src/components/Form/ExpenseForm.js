import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
   
  const[enteredTitle , setTitle] = useState('') ;
  const[enteredAmount , setAmount] = useState('');
  const[enteredDate , setDate] = useState('');

  const titleChange = (event) => setTitle(event.target.value)
  const amountChange= (event) => setAmount(event.target.value)
  const dateChange = (event) => setDate(event.target.value)

  const submitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {title : enteredTitle , price : enteredAmount , date : new Date(enteredDate)};
    props.onSave(ExpenseData);
    setTitle('');
    setAmount('');
    setDate('');
    
  };
 

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input
            type="date"
            value={enteredDate}
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
