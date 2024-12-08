import React from "react";

const UserContext = React.createContext()

export default UserContext;

// Context ultimately gives major component "Provider"  , here UserContext is PROVIDER
// Wrappers like div, empty,... when given with Context is basically PROVIDER

// <>                                                 <UserContext>                 
// <Login />                                             <Login />                                          
// <Card>              ------------>>                    <Card>                                                                                
//     <Data />       when wrapped with Context             <Data />                                                                 
// </Card>                  becomes Provider              </Card>                                                    
// </>                                                <UserContext />                                                     

// Now the Provider get the access as Global Context and not even change because of other variable or methods/functions.