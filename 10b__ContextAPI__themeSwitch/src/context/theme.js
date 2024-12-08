import { createContext, useContext } from "react";

// First one UseContext is to create useContext ans export is same as below and exported.
// Second ONe UserContextProvider of (10a)  is same as we 
// const [user, setUser] = useState(null) 
// we insted of user -->> themeMode &&& setUser we use two method/function -->> darkTheme, lightTheme

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {},
})

export const ThemeProvider = ThemeContext.Provider;
// It is to export the ContextProvider as we did in UserContextProvider of (10a) by wrapping childrens in the ContextProvider 
// which ultimately renders on the page


// ____________________________ exporting Custom HOOKS _____________________________________
export default function useTheme() {
    return useContext(ThemeContext)
}
// previously we impoting two HOOKS useContext from React and UserContext created by us.
// Here we just need to import useTheme which ultimately gives the 
// access of ThemeContext(UserContext for 10a) and also have useContext
