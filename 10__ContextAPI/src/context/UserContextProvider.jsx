import React, { useState } from "react";
import UserContext from "./UserContext";

// childrenn -->> prop
const UserContextProvider = ({children}) => {           // props should be children
    const [user, setUser] = useState(null)                  // can taken API calls & API data key's  value passed below
    return (
        <UserContext.Provider value={{user, setUser}}>       
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;