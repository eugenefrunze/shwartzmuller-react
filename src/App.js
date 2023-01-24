import React, {
  useState
} from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import EXPENSES_INITIAL from './mock/mockData';

function App() {

  const [expenses, setExpenses] = useState(EXPENSES_INITIAL);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense 
        onAddExpense = {addExpenseHandler} />
      <Expenses
        data = {expenses} />
    </div>
  );
  }

export default App;