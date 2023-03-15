import "./App.css";
import ExpenseItem from "./components/ExpensesElement/ExpenseItem";
import Card from "./components/UI/Card";
import ExpenseForm from "./components/Form/ExpenseForm";
import { useState } from "react";
import FilterExpense from "./components/FilterExpense/FilterExpense";
import ShowHideForm from "./components/Form/ShowHideForm";

const App = () => {
  const [expenses, setExpense] = useState([]);
  const [selectedYear, setSelectedYear] = useState("Select Year");
  const[formVisbility , setFormVisbility] = useState(false);

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  function getData(data) {
    setExpense((prevExpense) => [data, ...prevExpense]);
  }
  const filterdList = expenses
    .filter((e) =>
      selectedYear === "Select Year"
        ? true
        : e.date.getFullYear().toString() === selectedYear.toString()
    )
    .map((e) => (
      <ExpenseItem
        key={e.id}
        title={e.title}
        date={e.date}
        price={e.price}
      ></ExpenseItem>
    ));

  let showSuggestion = ''

  if (filterdList.length === 1) {
   showSuggestion = <p>Only single Expense here. Please add more...</p> ;
  }
  function setVisbilityOfForm(v){
    setFormVisbility(v);
  }
  const form = !formVisbility? <ShowHideForm visability ={setVisbilityOfForm}></ShowHideForm>:<ExpenseForm onSave={getData} visability ={setVisbilityOfForm}></ExpenseForm>


  return (
    <div>
      <Card className="expenses">
       {form}
      </Card>
      <Card className="expenses">
      <FilterExpense
          selectedYear={selectedYear}
          onYearChange={yearChangeHandler}
        />
        {filterdList}
        {showSuggestion}
        </Card>
    </div>
  );
};

export default App;
