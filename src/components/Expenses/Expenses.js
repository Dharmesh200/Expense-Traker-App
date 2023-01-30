import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import './ExpenseItem.css';
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    //? at this moment we add a date filter and we use this to select only matching date record and this variable is using at line 57
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {/* //? this the static way of displaying data */}
                {/* <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={
                        props.items[0].date
                    }
                />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={
                        props.items[1].date
                    }
                />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={
                        props.items[2].date
                    } /> */}

                {/* //?this the dynamic way of displaying data and we can add to list by add expense on ui dynamically */}
                {/* {props.items.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))} */}
                {/* //! but in this way instead of updating component it wiil keep add element at the bottom and this will cause bug because when we have state manage with respect to each other it will create bug when we inspect the element to avoid that we are adding key to identify component */}
                {/* {filteredExpenses.map((expense) => (
                    //?in above line we are fetching only date matching records
                    <ExpenseItem
                        //? key is default prop is available in react
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))} */}
                {/* conditional rendering and if data is not found displaying default mssg */}
                {/* //?at this line we using && operator to reduce expression because if RHS value is false it will search for LHS value its default nature of && operator(scalling) */}
                {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
                } */}
                {/* //!alternate way for above example to have lean jsx */}
                {/* {expensesCotent}; */}
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card >
        </div>
    )
};

export default Expenses;


