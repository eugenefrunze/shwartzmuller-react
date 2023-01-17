import React from "react";
import './NewExpenseForm.css';

const ExpenseControl = ({children}) => {
    return <div className="new-expense__control">
        {children}
    </div>;
}

export default ExpenseControl;