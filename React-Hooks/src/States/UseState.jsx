import React, { useState } from 'react'

const UseState = () => {
    const [count , setCount] = useState(0);
    const handlingPlus = () => {
        setCount(prevCount => prevCount+1)
    }

    const handlingMinus = () => {
        setCount(prevCount => prevCount-1)
    }
  return (
    <div>
        <button> <span onClick={handlingPlus}>+</span>  {count} <span onClick={handlingMinus}>-</span></button>
    </div>
  )
}

export default UseState