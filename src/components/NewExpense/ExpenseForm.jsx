import React, { useState } from 'react';
import ExpenseControl from './ExpenseControl';
import './NewExpenseForm.css';

const NewExpnseForm = ({onSaveExpenseData}) => {

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
  })

  const [newDate, setNewDate] = useState('');

  //right common approach
  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {...prevState, enteredTitle: e.target.value};
    })
  }

  //wrong approach, depends on potential wrong/outdated data
  const amountChangeHandler = (e) => {
    setUserInput(
      {...userInput, enteredAmount: e.target.value}
    )
  }

  const dateChangeHandler = (e) => {
    setNewDate(e.target.value)
  }

  //==============SUBMIT HANDLER===============================

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(newDate)
    };

    //exec onSaveExpenseData from NewExpense
    onSaveExpenseData(expenseData);

    //set states to empty
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
    });
    setNewDate('');
  }

  //===========================================================

    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <ExpenseControl>
            <label>title</label>
            <input
              type="text"
              value={userInput.enteredTitle}
              onChange={titleChangeHandler} />
            <label>value</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={userInput.enteredAmount}
              onChange={amountChangeHandler} />
          </ExpenseControl>
          <ExpenseControl>
            <label>date</label>
            <input
              type="date"
              min="2019-0101"
              max="2023-12-31"
              value={newDate}
              onChange={dateChangeHandler}
            />
          </ExpenseControl>
        </div>
        <div className="new-expense__actions">
          <button type='submit'>Add expense</button>
        </div>
      </form>
    );
}

export default NewExpnseForm;