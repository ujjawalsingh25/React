import React from "react";
import { useParams } from "react-router-dom";

// useParams -->> used to navigate to userId's given in the search box

function User(){
    const {userId} = useParams()
    return(
        <h1 className="bg-gray-500 text-white text-3xl p-4">User : {userId} </h1>
    )
}

export default User;