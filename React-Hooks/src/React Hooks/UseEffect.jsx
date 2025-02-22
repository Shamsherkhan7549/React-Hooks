import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);
    const handlingCount = () => {
        setCount(prevCount=> prevCount+1)
    }


    useEffect(()=>{
        console.log("This is a side effect")
    },[count])
  return (
    <button onClick={handlingCount}>Count: {count}</button>
  )
}

export default UseEffect