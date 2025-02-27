import React, {useMemo, useState} from 'react'

const MemoExpl = () => {
    const[count, setCount]=useState(0);
    const[number, setNumber]=useState(2);

    const squared=useMemo(()=>
    
       number * number,[number]
    );

  return (
    <div>
      <h2>Squared:{squared}</h2>
      <button onClick={()=>setNumber(number+1)}>Increase</button>
      <button onClick={()=>setNumber(number-1)}>decrease</button>
      
      <button onClick={()=>setCount(count+1)}>Increase count({count})</button>

    </div>
  )
}

export default MemoExpl;
