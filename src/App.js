import './App.css';
import { useState } from 'react';

function App() {
  const [count, setcount] = useState(1)

  const add=() =>{
    setcount(count+1);
    if(count ==1000){
      setcount(1000)
    }
  }
  const sub = () =>{
    setcount(count -1)

    if(count <=0){
      setcount(0)
    }
  }
  return (
    <div className="App">
     <button className="add" onClick={add}>+</button>
     <input className="userInput" type="number" value={count}  disabled />
     <button className="sub" onClick={sub}>-</button>
    </div>
  );
}

export default App;
