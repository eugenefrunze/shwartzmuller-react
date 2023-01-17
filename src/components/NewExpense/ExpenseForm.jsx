import React, { useState } from 'react';
import ExpenseControl from './ExpenseControl';
import './NewExpenseForm.css';

const NewExpnseForm = () => {

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {...prevState, enteredTitle: e.target.value};
    })
  }

  const amountChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      enteredAmount: e.target.value
    })
  }

  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      enteredDate: e.target.value
    })
  }

    return (
      <form>
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
              value={userInput.enteredDate}
              onChange={dateChangeHandler}
            />
          </ExpenseControl>
        </div>
        <div className="new-expense__actions">
          <button>Add expense</button>
        </div>
      </form>
    );
}

export default NewExpnseForm;