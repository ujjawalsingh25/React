
// Video 10 -->> TimeStamp 39:00 & last Summary (t0 watch for useCallBack for cache understanding and useEffect to run)

// useRef -->> give referrence to any Element on the web page to take referrence and do manupulation
import { useCallback, useState, useEffect, useRef} from "react"


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  // using useRef HOOK
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed)   str += "0123456789"
      if(charAllowed)    str +=  "@#$%&_"
      
      for(let i = 1; i <= length; i++){
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }

      setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword] )  // [within] -->> dependencies

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()                 // through useRef provide UI interactive features to targeted or referred values 
    //                                                  looks like copied when selected
    // passwordRef.current?.setSelectionRange(0,5)        / / selects for range of 5 while copy whole

    window.navigator.clipboard.writeText(password)    // ****** Copy to CLIPBOARD ***///***///***/// <<<<------
  }, [password])    // password -->> dependencies

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-4xl text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input className="outline-none w-full py-1 px-3"
            type="text" value={password} p
            laceholder="password" 
            readOnly        
            ref={passwordRef}  />      {/* passed referrence of password to passwordRef */}
                                    {/* readOnly so that it can't be given input text */}
            <button onClick={copyPassword}
              className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">COPY</button>
        </div>
        
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" className="cursor-pointer" 
              min={0} max={25} value={length}
              onChange={(eventt) => {setLength(eventt.target.value)}} />
              <label> Length : {length}</label>
              {/* ------------- Number CheckBox ------------ */}
            <div className="flex items-center gap-x-1">
            <input type="checkbox" id="numberInput" defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);        {/* changes to not OR true to false and vice-versa */}
              }}  />
              <label htmlFor="numberInput">Numbers</label>
            </div>  
            {/* ------------- Character CheckBox ------------ */}
            <div className="flex items-center gap-x-1">
            <input type="checkbox" id="characterInput" defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);         {/* changes to not OR true to false and vice-versa */}
              }}  />
              <label htmlFor="characterInput">Characters</label>
            </div>  

          </div>
        </div>
        
      </div>  
    </>
  )
}

export default App
