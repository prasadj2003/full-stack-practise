import { useState, memo } from 'react'
import { Route, BrowserRouter, Routes, useNavigate, Router} from 'react-router-dom'
import Hello from './components/Hello'
import Landing from "./components/Landing"
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  
  return (
    <div>
      
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/Hello' element={<Hello />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

const Appbar = memo(function() {
  console.log("buttons rerendered")
  const navigate = useNavigate();
  return (
    <div>
        <button onClick={() => {
          navigate('/Hello')
        }}>Hello</button>
        <button onClick={() => {
          navigate('/')
        }}>Landing</button>
      </div>
      
  );
})

export default App
