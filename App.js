import { useState } from 'react'
import './App.css';

function App(){
  const [count, setCount] = useState(0);
  return(
    <div className = "counter">
      <h1>{count}</h1>
      <div className="buttons">
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
      </div>
    </div>
  )
}

export default App;
