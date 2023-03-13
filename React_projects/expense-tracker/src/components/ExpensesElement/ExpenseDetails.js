import "./ExpenseItem.css";
 const ExpenseDetails = (props)=>{
   function clickHendler(e){
    const item = e.target.parentNode.parentNode.parentNode  ;
    item.removeChild(e.target.parentNode.parentNode );
    console.log(item);
   }

  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <h2>{props.LocationOfExpenditure}</h2>
      <div className="expense-item__price">{props.price}</div>
      <button onClick={clickHendler}>Delete Expense</button>
    </div>
  );
}
export default ExpenseDetails;
