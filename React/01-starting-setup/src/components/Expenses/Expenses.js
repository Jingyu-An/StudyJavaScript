import React, { useState } from 'react';

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');
  
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  
  return (
    <Card className={"expenses"}>
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpenses.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;