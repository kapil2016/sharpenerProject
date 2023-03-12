import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {title : 'item1' , date : new Date(2023 , 3 , 12).toISOString() , price: 120, LocationOfExpenditure:'location'},
    {title : 'item2' , date : new Date(2023 , 3 , 13).toISOString() , price: 140 ,LocationOfExpenditure:'location'},
    {title : 'item3' , date : new Date(2023 , 3 , 14).toISOString() , price: 160 ,LocationOfExpenditure:'location'},
    {title : 'item4' , date : new Date(2023 , 3 , 15).toISOString() , price: 170 ,LocationOfExpenditure:'location'},
    {title : 'item5' , date : new Date(2023 , 3 , 16).toISOString() , price: 190 ,LocationOfExpenditure:'location'},
    {title : 'item6' , date : new Date(2023 , 3 , 17).toISOString() , price: 200 ,LocationOfExpenditure:'location'}
  ]
  return (
    <div>
      {expenses.map(e => {
       return <ExpenseItem title = {e.title} date ={e.date} price = {e.price} LocationOfExpenditure = {e.LocationOfExpenditure}></ExpenseItem>
      })}
    </div>
  );
}

export default App;
