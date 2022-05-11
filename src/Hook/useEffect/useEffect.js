import React, { useState, useEffect, useLayoutEffect } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);


  useEffect(() => {
      console.log("come1 ")
    document.title = `You clicked  times`;
  },[]);

    useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

 
  


  return (
    <div>
      <p>{value}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setValue(value - 1)}>
        Click
      </button>
    </div>
  );
}
export default UseEffect;