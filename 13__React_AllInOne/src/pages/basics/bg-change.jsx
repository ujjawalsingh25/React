import { useState } from "react"

function BgChanger() {
  const [color, setColor] = useState("orange");

  const handleColorChange = (color) => {
    setColor(color);
  }

  return (
    <>
      <div className="flex flex-col items-center shadow-2xl">
        <div className="w-40 h-20 duration-300 flex rounded-3xl items-center justify-center font-bold text-2xl" 
          style={{backgroundColor: color}}
        >
          Bg-Change 
        </div>
        <div className="w-2xs p-4 flex items-center justify-around">
          {/* <button onClick={handleColorChange("red")}> red </button>    // ERROR  */}
          <button onClick={() => handleColorChange("red")}> red </button>
          <button onClick={() => handleColorChange("blue")}> blue </button>
          <button onClick={() => setColor("green")}> green </button>

          {/* __________________________________________________________________________________ */}
          {/* <button onClick={() => handleColorChange("red")}>red</button>  // ERROR  */}
          {/* -------------------------------- */}
          {/* When calling the function inside onClick, you should use an arrow function; 
          otherwise, it gets executed immediately when the component renders. */}

          {/* handleColorChange("red") executes immediately when the component renders.
          setColor("blue") updates the state before rendering.
          But onClick={undefined} is set, meaning the button does nothing when clicked.
          The initial render likely gets overridden by the useEffect call. */}
          {/* __________________________________________________________________________________ */}

        </div>
      </div>
    </>
  )
}

export default BgChanger;
