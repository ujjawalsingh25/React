import React from 'react';
import Counter from './counter';
import BgChanger from './bg-change';
import PasswordGenerator from './password-generator';

function Basics() {
  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col p-2 shadow-2xl'>
          <Counter />
        </div>
        <div className='flex flex-col p-6'>
          <BgChanger />
        </div>
        <div className='flex flex-col p-6'>
          <PasswordGenerator />
        </div>
      </div>
    </>
  )
}

export default Basics;