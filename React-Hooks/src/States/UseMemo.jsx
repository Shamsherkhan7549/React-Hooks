/** @format */

import React, { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  function cubNum(num) {
    console.log("calculation completed!");
    return Math.pow(num, 3);
  }
  const result = useMemo(() =>cubNum(num),[num]);

// const [result, setResult] = useState(0)
//  useEffect(()=>{
//   console.log("useEffect")
//      setResult(cubNum(num));
// },[num])

  return (
    <div>
      <input
        type='number'
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <p>Cube of Num = {result}</p>

      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        count= {count}
      </button>
    </div>
  );
};

export default UseMemo;
