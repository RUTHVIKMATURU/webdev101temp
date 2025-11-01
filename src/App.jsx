import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import CardDetails from './components/CardDetails.jsx'

function App() {
  return (
    <>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />}/>
        <Route path="/movie/:id" element={<CardDetails/>} />
        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
