import './App.css'
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { getUser } from "./scripts/user"

function App() {
  
  const [user, setUser] = useState(null);

  const checkLogin = async () => {
    const user = await getUser();
    setUser(user)
  }

  useEffect(() => {
    checkLogin()
  }, [])

  return (
    <div className="App">
      <Navbar user={user}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
