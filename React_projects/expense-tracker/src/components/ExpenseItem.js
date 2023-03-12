import React from "react";
import './ExpenseItem.css';

function ExpenseItem() {
  return (
      <div className="expense-item">
        <div>Mar 12 2023</div>
        <div className="expense-item__description">
          <h2>Car insurance</h2>
          <h2>Location Of Expenditure</h2>
          <div className="expense-item__price">$290.40</div> 
        </div>
        
      </div>
  );
}
export default ExpenseItem;
