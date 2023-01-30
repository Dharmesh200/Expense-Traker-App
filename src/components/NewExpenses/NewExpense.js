import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false);
    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    const startEditingHandler = () => {
        setEditing(true)
    };

    const stopEditingHandler = () => {
        setEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
            {isEditing && < ExpenseForm onSaveExpenseData={saveExpenseDateHandler} onCancel={stopEditingHandler} />}
        </div>
    )
};

export default NewExpense;
