import React, { useCallback, useEffect, useRef, useState } from 'react';

function PasswordGenerator() {
  const[length, setLength] = useState(8);
  const[numAllowed, setNumAllowed] = useState(false);
  const[specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const[password, setPassword] = useState("");
  const passwordRef = useRef(null);
  // useRef -->> give referrence to any Element on the web page to take referrence and do manupulation

  const generatePassword = useCallback( () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed)  str += "1234567890";
    if(specialCharAllowed)  str += "@#$%&";

    for(let i=0; i<length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, specialCharAllowed, setPassword]);
  
  //_____________________________________________________________________________________________________________ 
  // const copyPassword = useCallback(() => {  
  //   passwordRef?.current?.select();
  //   window.navigator.clipboard.writeText(password);
  // }, [passwordRef]);

  // useCallback -->> It is not just responsible to run function 
  //          but also to memoise and put the data to cache if changes to dependencies

  // If copyPassword were used inside a useEffect dependency array, 
  // an unwrapped function would cause the effect to re-run on every render, which is inefficient.

  // The main reason for using useCallback for the copyPassword function is performance optimization 
  // in scenarios where the function is passed as a dependency to child components or hooks like useEffect. 
  // However, in your current implementation, using useCallback is not strictly necessary because 
  // copyPassword is not being passed as a dependency anywhere.
  //_____________________________________________________________________________________________________________ 

  const copyPassword = () => {
    passwordRef?.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, specialCharAllowed, setPassword])

  return (
    <>
      <div className='py-2 text-2xl font-bold'>PasswordGenerator</div>
      <div className='flex  text-orange-500 font-bold'>
        <input 
          value={password}
          ref={passwordRef}     // passed referrence of password to passwordRef 
          readOnly  
          className='bg-white font-black'
          type="text" placeholder="password" 
        ></input>
        <button 
          onClick={copyPassword}
          // className='outline-none rounded-sm bg-[#2f72ed] text-white font-bold shadow-lg px-2 py-2'
          className='outline-none rounded-sm bg-[#2f72ed] text-white font-bold shadow-lg px-2 py-2 
          transition-all duration-100 hover:bg-[#1d5cd0] hover:shadow-xl'
        >Copy</button>
      </div>
      
      <div className='flex flex-col justify-end items-start'>
        <div className="flex items-center gap-x-1">
          <input className="cursor-pointer" 
            min={5} max={15} type='range'
            value={length}
            onChange={(eventt) => {setLength(eventt.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input 
            className='py-2' type='checkbox' 
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev) 
            }}
          />
          <label>Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
            className='py-2' type='checkbox' 
            defaultChecked={specialCharAllowed}
            onChange={() => {
              setSpecialCharAllowed((prev) => !prev) 
            }}
          />
          <label>Special Character</label>
        </div>
      </div>
    </>
  )
}

export default PasswordGenerator;
