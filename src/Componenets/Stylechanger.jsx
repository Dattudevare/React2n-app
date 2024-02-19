import React, { useState } from 'react'
import Colorsize from './Colorsize/Colorsize'

function Stylechanger() {
  const data = {
    title: 'CNC WEB WORLD',
    css: {
      color: 'red',
      border: "2px solid blue",
      fontSize: '30px',
    }
  }

  const [style, Setstyle] = useState(data)

  function sfunc() {
    Setstyle({
      title: "Datta Devare",
      css: {
        color: 'blue',
        border: "2px dotted red",
        fontSize: '30px',
      }
    })
  }


  return (
    <>
      <h1>this is stylechanger</h1>
      <h2 style={style.css}>{style.title}</h2 >
      <button style={{ padding: 10 }} onClick={sfunc}>Click me</button>
      <br />
      <Colorsize/>
      <div style={{backgroundImage:'url("logo192.png")', width:"200px",height:"200px"}} >
  
  </div>

    </>
  )
}

export default Stylechanger;