// ___________________________________________________________________________
// We always use CallBack function where we need to pass                      |
// referrence of function rather executing function of passing values         |
// Say we can't execute add() as "()" will execute                            |
// So we use CallBack function (i.e) -->> func = () => { }                    |
// ___________________________________________________________________________|


import { useState } from "react"

function App() {
  const [color, setColor] = useState("grey")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor : color }}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
              <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
                  
                  <button onClick={ () => setColor("red")}
                      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                      style={{backgroundColor : "red"}} >RED</button>
                  <button onClick={ () => setColor("blue")}
                      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                      style={{backgroundColor : "blue"}} >Blue</button>
                  <button onClick={ () => setColor("green")}
                      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                      style={{backgroundColor : "green"}} >Green</button>
                  <button onClick={ () => setColor("yellow")}
                      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                      style={{backgroundColor : "yellow"}} >Yellow</button>
                  <button onClick={ () => setColor("grey")}
                      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                      style={{backgroundColor : "grey"}} >Grey</button>
              

              {/* when the button is clicked, execute the function setColor with the argument "red". This will update the color state variable to "red".
              Once the color state variable is updated, React re-renders the component. Since the background color is set based on the color state variable, the background color of the main <div> will change accordingly. */}
              
              </div>
          </div>
      </div>
      
    </>
  )
}

export default App
