
 import React, {useState, useCallback} from "react";
 
  function Calling()
  {
     const[count, setCount]=useState(0);
     const handleClick=useCallback(()=>
    {
           alert("Button Clicked");
    }, []);

     return(
        <div>
            <h2>Count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
            <button onClick={handleClick}>Click Me</button>





        </div>
     );

  }
    export default Calling;