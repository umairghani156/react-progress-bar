import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count , setCount] = useState(1)
  const [count2, setCount2] = useState(0)
  const hello = (h) =>{
    console.log("h", h);
  }
   const increament = () =>{
    
    setCount2(Number(count2) + Number(count) );
    //setCount2(count2 + 1)
   }
   const decreament = () =>{
    setCount2(Number(count2) - Number(count))
   }

   const date = new Date()
   const getDate = date.setDate(date.getDate()+ count2);
   const convertDate = date.toDateString();
   console.log("getDate", getDate + 1);
   console.log(convertDate);
  return (
    <div className="App">
      <div className='formApp'>
      <div>
      <input className='inputRange' onChange={(e) => setCount(e.target.value)} type= "range" value={count} max={10} />
      <label>{count}</label>
      </div>
      <div>
        <button className='btn' onClick={()=> decreament()}><b>-</b></button>
        <input type='number' value={count2 == 0 ? count : count2}/>
        <button className='btn' onClick={() => increament()}><b>+</b></button>
      </div>
      <p style={{fontSize:"22px", fontWeight:"500"}}>{count2 === 0 ?`Today is `+ convertDate: `${count2} days from Today is `+ convertDate } </p>
    </div>
    </div>
  );
}

export default App;
