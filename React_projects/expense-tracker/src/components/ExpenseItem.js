//import React from "react";
function ExpenseItem() {
  const expenses = [
    { title: "food", price: "Rs 10" },
    { title: "petrol", price: "Rs 100" },
    { title: "Movie", price: "Rs 200" },
  ];
  return (
    <>
      <div>
        <h1>{expenses[0].title}</h1>
        <p>{expenses[0].price}</p>
      </div>
      <div>
        <h1>{expenses[1].title}</h1>
        <p>{expenses[1].price}</p>
      </div>
      <div>
        <h1>{expenses[2].title}</h1>
        <p>{expenses[2].price}</p>
      </div>
    </>
  );
}
export default ExpenseItem;
