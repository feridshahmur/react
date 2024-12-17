import React, { useState } from 'react'

const Modal = () => {
  const [show , setShow] = useState(true)
  const toogle = ()=>{
    setShow((prev)=>!prev)
  }
  return (
    <div>
      <div className="w3-container">
  <h2>W3.CSS Modal</h2>
  <button onclick="" className="w3-button w3-black">Open Modal</button>

  <div id="id01" className="w3-modal">
    <div className="w3-modal-content">

      
      <div className="w3-container">
        <span onClick={toogle} className="w3-button w3-display-topright">&times;</span>
        <p>Some text. Some text. Some text.</p>
        <p>Some text. Some text. Some text.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Modal