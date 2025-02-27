import React, { useEffect, useState } from 'react'
import Card from '../../components/Card';
import ThemeButton from '../../components/ThemeButton';
import { ThemeProvider } from '../../contexts/theme';

function ContextApi() {
    const[themeMode, setThemeMode] = useState("dark");

    const themeToggle = (mode) => {
        if(mode)  setThemeMode("dark");
        else setThemeMode("light");
    }
    // console.log(themeMode);

    // __________ Actual Change in THEME __________________________________________
    useEffect(() => {                                                            //|
    document.querySelector('html').classList.remove("light", "dark");            //|
    document.querySelector('html').classList.add(themeMode)                      //| 
    }, [themeMode, themeToggle])                                                 //| 
    // __________________________________________________________________________//|

  return (
    <ThemeProvider value={{themeMode, themeToggle}}>
        <div className="flex flex-wrap min-h-screen items-center bg-[#bebebe]">
            <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeButton />
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card />
            </div>
            </div>
        </div>
    </ThemeProvider> 
  )
}

export default ContextApi;