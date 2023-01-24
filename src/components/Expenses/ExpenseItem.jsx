import { useState } from "react";
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import Price from '../UI/Price';
import "./ExpenseItem.css";

const ExpenseItem = ({title, amount, date}) => {
    return (
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <Price amount={amount} />
        </div>
      </Card>
    );
}

export default ExpenseItem;
