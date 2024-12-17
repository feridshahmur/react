import React, { useState } from 'react'

const Change = () => {
  let [name , setName] = useState("Hello AzMP202")
 setName = "Hello AzMP202"
  return (
    <div>
      <h1>{setName}</h1>
      <button onClick={setName === "Hello AzMP202" ? "hello React" :"Hello AzMP202"}>Change</button>
    </div>
  )
}

export default Change