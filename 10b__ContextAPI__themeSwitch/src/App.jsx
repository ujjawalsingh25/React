
import { useEffect, useState } from 'react'
import './App.css'
import {ThemeProvider} from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light");
  }
  const darkTheme = () => {
    setThemeMode("dark");
  }

  // Also Tailwind must contain -->>> darkMode : "class" OR "media"  -->> The change take place on basis of class or media as given    
  // __________ Actual Change in THEME __________________________________________
  useEffect(() => {                                                            //|
    document.querySelector('html').classList.remove("light", "dark");          //|
    document.querySelector('html').classList.add(themeMode)                    //| 
  }, [themeMode])                                                              //| 
  // __________________________________________________________________________//|

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}} >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme Button */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
