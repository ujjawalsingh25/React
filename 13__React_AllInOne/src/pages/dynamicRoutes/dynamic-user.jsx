import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function DynamicUser() {
    const {userId} = useParams();
    const [data, setData] = useState([]);
    
    useEffect(() => {
      if (!userId) return; 
      fetch(`https://api.github.com/users/${userId}`)
        .then(res => res.json())
        .then(data => {setData(data)})
    }, [userId])
  
    return (
      <>
        <div className='flex flex-row items-center justify-center p-4'>
          <img className='rounded-full w-28' src={data.avatar_url} alt="gitPicture" />
          <div>
            <div className="text-centre m-4 text-white text-xl">
              {data.name} 
            </div>
            <div className="text-centre m-4 text-white text-xl">
              {data.location} 
            </div>
            <div className="text-centre m-4 text-white text-xl">
              {data.login} 
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center text-2xl'>
          <div className="text-centre text-white">
            {data.bio} 
          </div>
          <div className="text-centre text-white text-xl">
            Followers: {data.followers} 
          </div>
        </div>
      </>
    )
}

export default DynamicUser;