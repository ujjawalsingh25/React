import React from "react"
import Column from "./components/Column"


function App() {
  
  
  return (
    <>
      <div className='min-h-10 flex items-center justify-center'>
        <Column stage="Planned" />
        <Column stage="Ongoing" />
        <Column stage="Done" />
      </div>
    </>
  )
}

export default App
