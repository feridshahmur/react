import React from 'react'
import "./cards.css";
export const Cards = (props) => {
  return (
    <div className='card'>
      <h1>{props.name}</h1>
      <p>{props.group}</p>
      <h3>{props.vezife}</h3>
    </div>
  )
}
