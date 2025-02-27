import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom';

function User() {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleGithubNavi = () => {
    console.log(userId);
    if (userId.trim() !== "") {
      navigate(`/dynamic-routes/${userId}`)
    }
  }

  return (
    <>
      <div className='flex items-center justify-center text-gray-900 font-bold p-8'>
        <input 
          placeholder="Enter github username"
          type="text"
          className='bg-white font-black h-12 rounded-xl'
          value={userId}
          onChange={event => setUserId(event.target.value)}
        />
        <button 
          className='outline-none rounded-sm bg-[#2f72ed] text-white h-12 font-bold shadow-lg px-2 py-2 
          transition-all duration-100 hover:bg-[#1d5cd0] hover:shadow-xl'
          onClick={handleGithubNavi}
        >Search</button>
      </div>

      
      <Outlet />
    </>
  )
}

export default User;