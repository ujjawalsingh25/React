import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout__OR__CreateRouter.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/user.jsx'
import GitHub, { gitInfoLoader } from './components/GitHub/github.jsx'

// below is method to create router imported using "react-router-dom"
// const createdRouter = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children : [
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path : "about",
//         element : <About />
//       },
//       {
//         path : "contact",
//         element : <Contact />
//       }
//     ]
//   }
// ])
// ____________  same router created using "*** createRoutesFromElement ***" below as upper code _____________________
// For nexting of Routers we need to nest the routers in the closing Routers as <Route> .. <nested Route /> </Route>  |
// As below all routes are within Home "/" so nested within closing <Route> of Home "/".                              |  
// ___________________________________________________________________________________________________________________|
const createdRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      {/* <Route path='github' element={<GitHub />} /> */}
      <Route 
      loader={gitInfoLoader}
      path='github' 
      element={<GitHub />} />
    </Route> 
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createdRouter} />
  </React.StrictMode>,
)
