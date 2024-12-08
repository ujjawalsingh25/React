// ___________________________________________________________________________
// We always use CallBack function where we need to pass                      |
// referrence of function rather executing function of passing values         |
// Say we can't execute add() as "()" will execute                            |
// So we use CallBack function (i.e) -->> func = () => { }                    |
// ___________________________________________________________________________|

import './App.css'

import {useState} from 'react'    // **** import useSate method -->> HOOKS
// import React, {useState, useEffect} from 'react'   // we can also add multiple  by comma seperator, 
//                                                      for multiple methods/function from same library use {m1, m2, ..}

function App() {
  // let counter = 5;                         // same let variable is below using HOOK useState
  let [counter, setCounterr] = useState(5);     // 5 is the initial value ; useState (variable , Function) -> parameter

  const addValue = () => {
    // counter += 1;
    // counter = counter + 1;    the same counter update below using setCounterr taking counter as parameter to increment
    setCounterr(counter + 1)
    console.log(counter);
  }
  const subValue =() => {
    setCounterr(counter -1);
    if(counter <=0){
      setCounterr(counter=0);
      alert("Value can't Negative")
    }
  }

  return (
    <>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue} > Added Value : {counter} </button>
      <br />                  
      <button onClick={subValue}>Remove Value : {counter} </button>
      <p> footer : {counter} </p>

      <br />                                // Tags in ".jsx" always be closing
      <h3>  State UI SYNCing     <br />
        In React, "hooks" are functions that allow you to use state and other React features without writing a  class. It introduced as a way to reuse stateful logic across components. <br />
        Below the same counter variable is at multiple place and in classic JS to update the state we need to access them all by getElementByID, or querySelector <br />
        React provide some *** Methods/Functions called HOOKS *** (like useState, useEffect) to allow user to change variable and the UI UPDATE will be controll by the react i.e not direct chnaging but propagate changing multiple state through Virtual DOM in the SPA(Single Page Application) <br />
        All these are executed through BABEL it automaticaly changes using HOOKS methods in the background (say as compiler) <br />
      </h3>  
    </>
  )
}

export default App
