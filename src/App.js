import Expenses from "./components/Expenses/Expenses";
import expenses from './mock/mockData';

function App() {
  return (
    <div>
      <Expenses
        data={expenses} />
    </div>
  );
}

export default App;