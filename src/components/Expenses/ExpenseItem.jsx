import { useState } from "react";
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import Price from '../UI/Price';
import "./ExpenseItem.css";

const ExpenseItem = ({title, amount, date}) => {
    const [itemTitle, setItemTitle] = useState(title);
    const clickHandler = () => {
        setItemTitle('updated!');
    }

    return (
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{itemTitle}</h2>
          <Price amount={amount} />
        </div>
        <button onClick={clickHandler}>
            some info here
        </button>
      </Card>
    );
}

export default ExpenseItem;
