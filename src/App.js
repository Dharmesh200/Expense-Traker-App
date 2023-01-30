// import logo from './logo.svg';
// import './App.css';
// import React from "react";

// function Header() {
//   return (
//     <header>
//       <nav>
//         {/* <img src="./logo.png" width="40px" /> */}
//       </nav>
//     </header>
//   )
// }

// function MainComponent() {
//   <div>
//     <h1>
//       Fun fact about React
//     </h1>
//     <ul>
//       <li>was first realesed in 2013</li>
//       <li>was originally created by jordan walke</li>
//       <li>has well over 100k start on github</li>
//       <li>is maintain by facebook</li>
//       <li>power thousand of enterprise apps, including mobile app</li>
//     </ul>
//   </div>
// }

// function Footer() {
//   <footer>
//     <small>
//       2023 Dharmesh development. All rights reserved
//     </small>
//   </footer>
// }


// function App() {
//   return (
//     <div>
//       <Header />
//       <MainComponent />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: 'e2',
    title: 'New Tv',
    amount: 100.12,
    date: new Date(2021, 7, 14)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.12,
    date: new Date(2021, 6, 14)
  }
];
function App() {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    // console.log('In App.js');
    // console.log(expense);
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
};

export default App;

// import React from 'react';
// import UseEffect from './components/useEffect/UseEffect';

// const App = () => {
//   return (
//     <div>
//       <UseEffect />
//     </div>
//   )
// }

// export default App
