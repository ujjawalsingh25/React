
import Name from './name'


function App() {              // function that returns html
  return (
    // Fragnment aS in JSX of JavaScript always allow to only one tag to export so wraped all tags to 
    //render in empty tag or any tag like div, p, span
    // Fragnment or empty tag   -->>   <> </>
    <>          
    <h1> Learning React with Vite</h1>
    <Name />
    </>
  )
}

export default App
 