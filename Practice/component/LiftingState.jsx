import React, { useState } from "react";
 
 const LiftingState=()=>
 {
     const[count, setCount]=useState(0);// State is lifted up to the parent
 

  return(
    <>   
    <h2>Parent Component</h2>
    <p>Shared Count:{count}</p>
    <ChildA count={count} setCount={setCount}/>
    <ChildB count={count} setCount={setCount}/>

    </>
  );
};

 const ChildA=({count, setCount})=>
 (
     <>
        <h3>Child A</h3>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
     
     
     </>
 );

  const ChildB=({count, setCount})=>
  (
    <>
      <h3>Child B</h3>
      <p>Count:{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    
    
    </>
  );
    
   export default LiftingState;
