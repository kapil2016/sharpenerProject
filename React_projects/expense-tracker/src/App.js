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

  function getData (data){
    setExpense((prevExpense)=> [data ,...prevExpense])
  }
  
  return (
    <div>
    
    <Card className='expenses'>
    <ExpenseForm onSave={getData}></ExpenseForm>
    <FilterExpense selectedYear={selectedYear} onYearChange={yearChangeHandler} />
    {expenses.map(e => {
      return <ExpenseItem key = {e.id} title = {e.title} date ={e.date} price = {e.price} ></ExpenseItem>
     })}
    </Card> 
    </div>
    
    
  );
}

export default App;
