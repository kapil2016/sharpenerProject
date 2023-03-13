import "./ExpenseItem.css";
 const ExpenseDetails = (props)=> {
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <h2>{props.LocationOfExpenditure}</h2>
      <div className="expense-item__price">{props.price}</div>
    </div>
  );
}
export default ExpenseDetails;
