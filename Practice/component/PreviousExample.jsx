import {useRef, useEffect, useState} from "react";

 function PreviousExample()
 {
     const[count, setCount]=useState(0);
     const prevCount=useRef(null);
         useEffect(()=>
        {
             prevCount.current=count;
        }, [count]);
         
        return(
            <>
                <h1>Current Count:{count}</h1>
                <h2>Previous Count:{preCount.current}</h2>
                <button onClick={()=>setCount(count+1)}>Increment</button>

                </>   

        );
        }


export default PreviousExample;












 