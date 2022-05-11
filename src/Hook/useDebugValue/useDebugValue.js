import { useDebugValue, useState } from "react";

function UseDebugValue(friendID) {
    const [isOnline, setIsOnline] = useState(null);
    console.log(isOnline,"isOnline")
  
    useDebugValue(isOnline ? 'Online' : 'Offline');
   
  
    return  ({isOnline},<h1 onClick={()=>setIsOnline("Offline")}>hello</h1>) ;
  }
  export default UseDebugValue;