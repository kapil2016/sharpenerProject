import React from 'react';
import './FilterExpense.css';

const FilterExpense = (props) => {
  const { selectedYear, onYearChange } = props;

  const years = ['Select Year',2023, 2022, 2021, 2020]; // list of available years

  const yearChangeHandler = (event) => {
    onYearChange(event.target.value);
  };

  return (
    <div className="filter-expense">
      <label htmlFor="year">Filter by Year</label>
      <select id="year" value={selectedYear} onChange={yearChangeHandler}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterExpense;
