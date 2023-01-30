import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enterdTitle, setEnteredTitle] = useState('');
    const [enterdAmount, setEnteredAmount] = useState('')
    const [enterdDate, setEnteredDate] = useState('');

    //instead of using three slicess of useState we can use in one usestate given below but if we want to modify single value it will update all 

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        //to get the value whatever we pass in input tag we use event.target.value it is default way to access the value
        // console.log(event.target.value);
        setEnteredTitle(event.target.value);
        //for single useState
        // setUserInput({
        //     // while doing this we are loosing the other data to overcome that
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     // while doing this we are loosing the other data to overcome that
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     // while doing this we are loosing the other data to overcome that
        //     ...userInput,
        //     enteredDate: event.target.value,
        //     })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterdTitle,
            amount: +enterdAmount, //here value coming as tring so convert it into number we are using + operator to convert into number data type explicitely
            date: new Date(enterdDate)
        };

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('')
    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input
                    type="text"
                    value={enterdTitle}
                    onChange={titleChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input
                    type="number"
                    value={enterdAmount}
                    min="0.01"
                    step="0.01"
                    onChange={amountChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input
                    type="date"
                    value={enterdDate}
                    min="2019-01-01"
                    max="2022-12-31"
                    onChange={dateChangeHandler}
                />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;
