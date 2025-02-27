import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  
  const handleAdd = () => {
    setCounter(counter+1);
  }
  const handleSub = () => {
    setCounter(counter-1);
    if(counter <= 0)  setCounter(0);
  }

  return (
    <>
      <div className='text-2xl font-bold'>
        Counter Probelm
      </div>
      <div className='py-4'>
        Counter Value: {counter}
      </div>
      <div className='flex flex-row justify-evenly'>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>Sub</button>
      </div>
      
    </>
  )
}

export default Counter;
