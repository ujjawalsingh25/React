import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <>
      <h1>Context API Learning </h1>
      <UserContextProvider>
        <h2>Login-Passeord</h2>
        <Login />
        <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
