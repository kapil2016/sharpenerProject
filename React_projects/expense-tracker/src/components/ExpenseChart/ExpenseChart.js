import React from 'react';
import './ExpenseChart.css';
import VerticalBar from './VerticalBar';

const ExpenseChart = (props) => {
  const expensePerMonth = [
    { Month: 'January', Amount: 0 },
    { Month: 'February', Amount: 0 },
    { Month: 'March', Amount: 0 },
    { Month: 'April', Amount: 0 },
    { Month: 'May', Amount: 0 },
    { Month: 'June', Amount: 0 },
    { Month: 'July', Amount: 0 },
    { Month: 'August', Amount: 0 },
    { Month: 'September', Amount: 0 },
    { Month: 'October', Amount: 0 },
    { Month: 'November', Amount: 0 },
    { Month: 'December', Amount: 0 }
  ];
  props.data.forEach(element => {
    const month = element.date.getMonth();
    expensePerMonth[month].Amount += parseInt(element.price) ;
    
  });
  console.log(props.data)
  console.log(expensePerMonth)
  
  const expenses = expensePerMonth.map((item)=>{return item.Amount});
  const maxamount = Math.max(...expenses);
  

  return (
      <div className="chart-container">
        {expensePerMonth.map((item) => (
          <VerticalBar key ={item.Month} fillPercentage={(item.Amount/maxamount)*100} height={200} label={item.Month} />
        ))}
      </div>
  );
};

export default ExpenseChart;
