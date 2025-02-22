import React,{useEffect, useState,useRef} from 'react'

const UseRef = () => {
        const[counter, setCounter] = useState(0);
        // const [renderCount, setRenderCount] = useState(0);

        const renderCount = useRef(0);
        const inputRef = useRef();

        const handlingPlus = () => {
            setCounter(prevCounter=>prevCounter+1)
        }

        const handlingMinus = () => {
            setCounter(prevCounter=>prevCounter-1)
        }

        const handlingRenderCount = () => {
            // setRenderCount(prevCounter=>prevCounter+1)
            renderCount.current = renderCount.current +1;

        }

        const handlingInput = () => {
            console.log(inputRef.current)
            inputRef.current.style.backgroundColor = "gray"
            inputRef.current.style.color = "white"
            inputRef.current.style.padding = "4px 8px"
            inputRef.current.style.fontSize = "2rem"
            inputRef.current.style.height = "2rem"
            inputRef.current.style.border = "1px solid gray"
            inputRef.current.style.redius = "10px"
        }

        useEffect(()=>{
                handlingRenderCount()
        })

  return (
    <div>
        <button onClick={handlingPlus}>+</button>
        <p>{counter}</p>
        <button onClick={handlingMinus}>-</button>
        <p>Render count = {renderCount.current}</p>

        <input type="text" ref={inputRef}/>
        <button onClick={handlingInput}>click</button>
    </div>
  )
}

export default UseRef