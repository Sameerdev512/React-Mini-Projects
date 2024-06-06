import { useState } from "react"
import './App.css'
function App() {
  const [count, setCount] = useState(0)
const handleIncrement =()=>{
  setCount(count+1);
}

const handleDecrement=()=>
  {
    setCount(count-1);
  }
  return (
    <>
      <div className="container">
        <div className="button" onClick={handleDecrement}>-</div>
        <div className="counter">Counter is {count}</div>
        <div className="button" onClick={handleIncrement}>+</div>
      </div>
    </>
  );
}

export default App
