import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import expenses from './mock/mockData';

function App() {
  return (
    <div>
      <NewExpense />
      <Expenses
        data={expenses} />
    </div>
  );
}

export default App;