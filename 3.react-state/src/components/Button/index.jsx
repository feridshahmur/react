import React, { useState } from 'react'

const Component = () => {
  const [name, setName] = useState("0")
  function inc(){
    setName((name)=>+name+1)
  }
  function dec(){
    setName((name)=>+name-1)
  }
  function res(){
    setName(0)
  }
  return (
    <div>
      <button className="inc" onClick={inc}>+</button>
      <h1>{name}</h1>
      <button className="dec" onClick={dec}>-</button>
      <br />
      <button className="res" onClick={res}>Reset</button>
    </div>
  )
}

export default Component