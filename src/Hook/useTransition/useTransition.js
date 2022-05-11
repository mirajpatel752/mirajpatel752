import { Spin } from "antd";
import { useState, useTransition } from "react";

function UseTransition() {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);
    
    console.log(isPending,"isPending")
    function handleClick() {
      startTransition(() => {
        setCount(c => c + 1);
      })
    }
  
    return (
      <div>
        {isPending && <Spin />}
        <button onClick={handleClick}>{count}</button>
      </div>
    );
  }
  export default UseTransition;