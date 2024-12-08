import React, {useContext, useState} from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // ________________________________________________________________________________________
    // setUser is from UserContextProvider  where we passed user & setUser 
    // where if user value is then taken else set value taken input from user using setUser 
    const {setUser} = useContext(UserContext)

    const handleSubmit = (eventt) => {
        eventt.preventDefault();
        setUser({username, password});
    }
    // // These are to send data ___________________________________________________________

    return (
        <div>
            <h2>Login</h2>
            <input value={username} onChange={(eventt) => setUsername(eventt.target.value)}  
                                        //  when change set the username as input given 
                type="text" placeholder="username" />
            {"  "}
            <input value={password} onChange={(eventt) => setPassword(eventt.target.value)}
                type="password" placeholder="password"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;
