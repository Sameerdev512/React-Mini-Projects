import { useState } from "react"
import './App.css';
function App() {
  
const [count,setCount]= useState(0);

const handleIncrement =()=>
  {
    setCount(count+1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <center>
        <h1>Welcome to React Counter</h1>
      </center>
      <div className="container">
        <div>
          <button className="btn" onClick={handleDecrement}>
            -
          </button>
        </div>
        <div className="counter">Count is {count}</div>
        <div>
          <button className="btn" onClick={handleIncrement}>+</button>
        </div>
      </div>
    </>
  );
}

export default App
