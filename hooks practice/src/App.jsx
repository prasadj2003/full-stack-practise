import { useEffect, useMemo, useState, memo, useCallback } from 'react'
import axios from 'axios';


function App() {
  
  const [count, setCount] = useState(0);
 

  return (
    <button onClick={() => {
      setCount(count => count+1)
      
      setCount(count => count+1)
      
    }}>count is {count}</button>
  )
}


export default App
