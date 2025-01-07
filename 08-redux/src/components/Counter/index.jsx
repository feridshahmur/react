import React, { useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment,  reset , incrementByAmount } from "../../redux/features/slice"
const Counter = () => {
    const count = useSelector((state) => state.counter)
    const state = useSelector((state) => state)

    const inputRef = useRef()
    const dispatch = useDispatch()

    const handleIncrementByAmount = () => {
        // console.log(inputRef.current.value);
        dispatch(incrementByAmount(Number(inputRef?.current?.value)))
    }
  return (
    <div>
    <button onClick={() => { dispatch(increment("test")) }}>Increment</button>
    <h1>{count.value}</h1>
    <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
    <br />
    <button onClick={() => { dispatch(reset()) }}>Reset</button>
    <div>
        <input type="number" ref={inputRef} />
        <button onClick={() => { handleIncrementByAmount() }}>inc by amount</button>
    </div>
</div>
  )
}

export default Counter