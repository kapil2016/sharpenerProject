import "./ExpenseItem.css";
import { useState } from "react";
 const ExpenseDetails = (props)=>{
    const [currAmount, setAmount]  = useState(props.price) ;
   function clickHendler(e){
    const item = e.target.parentNode.parentNode.parentNode  ;
    item.removeChild(e.target.parentNode.parentNode );
    console.log(item);
   }

   function changeExpense () {
      setAmount((currAmount)=>{
        currAmount = `$100` ;
        return currAmount ;
      })
   }

  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <h2>{props.LocationOfExpenditure}</h2>
      <div className="expense-item__price">{currAmount}</div>
      <button onClick={changeExpense}>Change Expense</button>
      <button onClick={clickHendler}>Delete Expense</button>
    </div>
  );
}
export default ExpenseDetails;
