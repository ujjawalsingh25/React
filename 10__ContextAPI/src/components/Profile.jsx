import React, {useContext, useState} from "react";
import UserContext from "../context/UserContext";

function Login() {
    const {user} = useContext(UserContext)
    
    if(!user) return <div>Please Login</div>
    return <div>Welcome {user.username} </div>
}

export default Login; 