import React, { useState } from "react";
import Box from "./components/Box";


function App() {
  const [leftMoving, setLeftMoving] = useState(true);
  const [rightMoving, setRightMoving] = useState(false);
  
  return (
    <>     
      <div className="flex py-12 justify-around w-3/5 ml-auto mr-auto">
        <Box moving={leftMoving} />
        <div className="flex flex-row items-center justify-evenly ml-auto mr-auto">
          <button
            onClick={() => {setRightMoving(false), setLeftMoving(true)}} 
            className='rotate-180 text-5xl mx-4 outline-none rounded-sm bg-[#ed2f2f] text-white font-bold shadow-lg px-4 py-2 
              transition-all duration-100 hover:bg-[#d01d1d] hover:shadow-xl rounded-tl-6xl rounded-bl-2xl 
              rounded-tr-2xl rounded-br-4xl'> ➔ </button>
          <button 
            onClick={() => {setRightMoving(true), setLeftMoving(false)}} 
            className='mx-4 outline-none rounded-sm bg-[#2fed84] text-white text-5xl font-bold shadow-lg px-4 py-2 
              transition-all duration-100 hover:bg-[#1dd09d] hover:shadow-xl rounded-tl-2xl rounded-bl-6xl 
              rounded-tr-4xl rounded-br-2xl'> ➔ </button>
        </div>
        <Box moving={rightMoving} />
      </div>
    </>
  )
}

export default App
