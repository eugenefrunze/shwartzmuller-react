import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css';

const Expenses = ({ data }) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilterHandler={filterChangeHandler} />
      {data.map(({ id, title, amount, date }) => (
        <ExpenseItem
        key={id}
        title={title}
        amount={amount}
        date={date} />
      ))}
    </Card>
  );
};

export default Expenses;