import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {

  let myObj = {
    name : "Ujjawal Singh",
    dept : "ECE"
  }
  let myArr= [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Props AND Tailwind</h1>
      <h3>
        Props helps to make component reusable , every app(.jsx file) have access to Props <br />

      </h3> 

      <Card propss="Passed Value 1" btnText="Visit"/>                 {/* values in the container can be passed as Object */}
      <Card propss="Passed Value 1" btnText="Click Me"/>                 {/* values in the container can be passed as Object */}
      <Card propss="Passed Value" someObj={myObj}/>


      {/* props2, props1 -->> renamed to propss but below codes are based on prev */}
      {/* <Card props2="Passed Value 2" someArr={myArr}/> */}/
      {/* ----------------------  ERRORS  ------------------------------------------------- */}
      {/* <Card props2="Passed Value 2" myObj={name : "Ujjawal"}/> */}   
                                 {/* *** ERROR Need to pass as Object with Variable as evaluated expression*/}
      {/* <Card props2="Passed Value 2" someObj=myObj ={} /> */}      
                                  {/* *** ERROR Need to pass as Object */}
      {/* --------------------------------------------------------------------------------- */}

    </>
  )
}

export default App
