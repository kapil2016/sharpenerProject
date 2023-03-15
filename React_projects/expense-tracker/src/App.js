import "./App.css";
import ExpenseItem from "./components/ExpensesElement/ExpenseItem";
import Card from "./components/UI/Card";
import ExpenseForm from "./components/Form/ExpenseForm";
import { useState } from "react";
import FilterExpense from "./components/FilterExpense/FilterExpense";

const App = () => {
  const [expenses, setExpense] = useState([]);
  const [selectedYear, setSelectedYear] = useState("Select Year");

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

  if (filterdList.length == 1) {
   showSuggestion = <p>Only single Expense here. Please add more...</p> ;
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseForm onSave={getData}></ExpenseForm>
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
