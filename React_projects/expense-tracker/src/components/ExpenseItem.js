import React from "react";
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
      <div className="expense-item">
        <div>{props.date}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <h2>{props.LocationOfExpenditure}</h2>
          <div className="expense-item__price">{props.price}</div> 
        </div>
        
      </div>
  );
}
export default ExpenseItem;
