import React from 'react';
import './NewExpense.css';
import NewExpnseForm from './ExpenseForm';

const NewExpense = ({onAddExpense}) => {

  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString()
    }

    onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <NewExpnseForm 
        onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;