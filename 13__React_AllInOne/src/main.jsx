import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Layout from './Layout';
import Basics from './pages/basics/index.jsx'
import DynamicUser from './pages/dynamicRoutes/dynamic-user.jsx';
import User from './pages/dynamicRoutes/user.jsx';
import ContextApi from './pages/contextAPI/context-api.jsx';
import CustomHooks from './pages/customHooks/custom-hooks.jsx';
import LocalStorage from './pages/localStorage/local-storage.jsx';
import ReduxIndex from './pages/reduxToolkit/index.jsx';


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<App /> } />
      <Route path='/basics' element={<Basics /> } />
      <Route path='/dynamic-routes' element={<User /> }>
        <Route path='/dynamic-routes/:userId' element={<DynamicUser /> } />
      </Route>
      <Route path='/custom-hooks' element={<CustomHooks /> } />
      <Route path='/context-api' element={<ContextApi /> } />
      <Route path='/local-storage' element={<LocalStorage /> } />
      <Route path='/redux-toolkit' element={<ReduxIndex /> } />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
 