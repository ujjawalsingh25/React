// ___________________  Install Redux Toolkit ______________________________________________
// npm install @reduxjs/toolkit       -->> Redux is a library itself for all                 |
// npm install react-redux                -->> to use redux in react we use React- Redux     |
// __________________________________________________________________________________________|

// ___________________________________________________________________________
// We always use CallBack function where we need to pass                      |
// referrence of function rather executing function of passing values         |
// Say we can't execute add() as "()" will execute                            |
// So we use CallBack function (i.e) -->> func = () => { }                    |
// ___________________________________________________________________________|

import { useState } from 'react'
import './App.css'
import AddTodo from './componets/AddTodo'
import Todos from './componets/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
