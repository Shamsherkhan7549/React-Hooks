import React, { useCallback, useState } from 'react'
import Headers from './Headers';
const UseCallback = () => {
    const [count, setCount] = useState(0);

    const func = useCallback(()=> {
        console.log("useCallback")
    },[]);

  return (
    <div>
        <Headers func = {func}/>
        <p>{count}</p>
        <button onClick={()=> setCount(count+1)}>+1</button>
    </div>
  )
}

export default UseCallback