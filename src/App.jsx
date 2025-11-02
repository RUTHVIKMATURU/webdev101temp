import { Routes, Route,Link } from "react-router-dom";
import './App.css'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import CardDetails from './components/CardDetails.jsx'

function App() {
  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 bg-black bg-opacity-70 fixed top-0 left-0 w-full z-10">
        <h1 className="text-3xl font-bold text-red-600"><Link to="/">NETFLIX</Link></h1>
        <div className="space-x-4">
          <Link to="/login" className="text-sm text-gray-300 hover:underline">Log in</Link>
          <Link to="/signup" className="text-sm text-gray-300 hover:underline">Sign up</Link>
        </div>
      </nav>
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
