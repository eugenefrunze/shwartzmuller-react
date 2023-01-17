import React from 'react';
import './NewExpense.css';
import NewExpnseForm from './ExpenseForm';

const NewExpense = () => {
    return (
      <div className="new-expense">
        <NewExpnseForm />
      </div>
    );
}

export default NewExpense;