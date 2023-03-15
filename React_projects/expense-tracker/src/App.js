import './App.css';
import ExpenseItem from './components/ExpensesElement/ExpenseItem';
import Card from './components/UI/Card';
import ExpenseForm from './components/Form/ExpenseForm';
import { useState } from 'react';
import FilterExpense from './components/FilterExpense/FilterExpense';

const App = ()=> {
  const [expenses, setExpense] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2023);

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  // const expenses = [
  //   {title : 'item1' , date : new Date(2023 , 3 , 12), price: 120, LocationOfExpenditure:'location'},
  //   {title : 'item2' , date : new Date(2023 , 3 , 13), price: 140 ,LocationOfExpenditure:'location'},
  //   {title : 'item3' , date : new Date(2023 , 3 , 14), price: 160 ,LocationOfExpenditure:'location'},
  //   {title : 'item4' , date : new Date(2023 , 3 , 15), price: 170 ,LocationOfExpenditure:'location'},
  //   {title : 'item5' , date : new Date(2023 , 3 , 16), price: 190 ,LocationOfExpenditure:'location'},
  //   {title : 'item6' , date : new Date(2023 , 3 , 17), price: 200 ,LocationOfExpenditure:'location'}
  // ]
  function getData (data){
    setExpense([...expenses,data])
    console.log(expenses);

  }
  
  return (
    <Card className='expenses'>
    <ExpenseForm onSave={getData}></ExpenseForm>
    <FilterExpense selectedYear={selectedYear} onYearChange={yearChangeHandler} />
    {expenses.map(e => {
      return <ExpenseItem title = {e.title} date ={e.date} price = {e.price} ></ExpenseItem>
     })}
    </Card> 
    
  );
}

export default App;
