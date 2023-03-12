import React from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';



function ExpenseItem(props) {
  return (
      <div className="expense-item">
        <ExpenseDate date = {props.date}></ExpenseDate>
        <ExpenseDetails title = {props.title} price = {props.price} LocationOfExpenditure = {props.LocationOfExpenditure}></ExpenseDetails>  
      </div>
  );
}
export default ExpenseItem;
