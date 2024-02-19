import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Stylechanger from './Componenets/Stylechanger';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  // const [change, setchange] = useState('this is Maharashtra')

  let [counter, setcounter] = useState(0)

  function Subtract() {
    if (counter > 1) {
      counter = counter - 1;
      setcounter(counter)
    }

  }

  function Addition() {
    if (counter < 20) {
      counter = counter + 1
      setcounter(counter)
    }
  }
  return (
    <>
<div style={{backgroundImage:'url("logo192.png")', width:"200px",height:"300px"}} >
  
  </div>
      {/* <h1>{change}</h1> */}

      {/* <button onClick={() => { setchange("this is India") }}>click</button> */}


      <h1>counter</h1>
      <h2>Value:{counter}</h2>

      <button onClick={Subtract}>Sub</button> &nbsp;
      &nbsp;
      {/* <button onClick={() => { setcounter(counter + 1) }}>Sub</button> */}
      <button onClick={Addition}>Sub</button>
      <hr></hr>
      <hr></hr>
      <Stylechanger />
    </>
  );
}

export default App;
