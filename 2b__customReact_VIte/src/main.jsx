import React from 'react'                   // library imported (core Foundational lib helps to get referrences)
import ReactDOM from 'react-dom/client'    // library imported  (Help implementation web however both helps to manuplate web DOM)
import App from './App.jsx'

// { } -->> evaluated expression -> we will write the final outcome of the JavaScript not the JS code.

function MyApp_newFunc () {
  const variable1 = "Variable Added"
  return (
    <div>
      <h3> New Function Injected with {variable1}</h3>  
      <p>
        Every react or vite, bable uses "BUNDLER" use to optimise, upgrade and **CONVERT syntax to Object like structure 
        like below 'JSX' = html mix with JavaScript
      </p>
    </div>
  )
}


const reactElement = {
  type : 'a',
  props : {
      href : 'http://google.com',
      target : '_blank'
  },
  children : 'Link to google'
}

const reactElement2 = (
  <a href="https://google.com" target='_blank'>Link to Google with reactElement2</a>
);

const variable2 = "variable2 Added as evaluated Expression"
const reactElement3 = React.createElement(
  'a',
  {href:"https://google.com", target:'_blank'},
  '      Link to Google with reactElement3',
  variable2              // evaluated expression so added but wi can't write code statements like containing if-else

)

ReactDOM.createRoot(document.getElementById('root')).render(
  // root is the id in the div tag of the main index.html(in public)
//  ask to render the app.js in the div having id-root    // StrictMode --> property in react
  <>
  <MyApp_newFunc />
  {reactElement2}
  {reactElement3}   
  </>
  
  
  //  MyApp_newFunc() //-->>  Since function so can be executed like this also
  
  // reactElement2 //-->> converted to object and runs
  // reactElement  -->> **not converted to object as the syntax is my Choice not followed libraries
  // reactElement3   // own written Object with followed React conventions
  
)
 