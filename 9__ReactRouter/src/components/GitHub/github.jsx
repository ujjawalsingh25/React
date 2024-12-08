import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

// useLoaderData -->> HOOK used to get data from the fetched API call.

function GitHub() {
    const data =  useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ujjawalsingh25')
    //     .then(responsee => responsee.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

    return (
        <div className="text-centre m-4 bg-gray-700 text-white p-4 text-3xl">GitHub Followers : {data.followers} 
        <img src={data.avatar_url} alt="gitPicture" width={300} />
        </div>
    )
}

export default GitHub;

export const gitInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ujjawalsingh25')
    return response.json()
}