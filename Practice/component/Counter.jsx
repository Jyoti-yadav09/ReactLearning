import React, {useReducer} from "react";

 const initialState={count:0};

  function reducer(state, action)
  {
     switch(action.type)
     {
         case "increment":
            return {count:state.count+1};
     
      
        case "decrement":
            return {count:state.count-1};

        case "reset":
        return initialState;

         default:
            throw new Error("Unknown action type");

     }}

      function Counter()
      {
         const[state, dispatch]=useReducer(reducer, initialState);
         return(
            <>
             <h2>Counter:{state.count}</h2>
             <button onClick={()=>dispatch({type:"increment"})}>+</button>
             <button onClick={()=>dispatch({type:"decrement"})}>-</button>
             <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
            
            
            
            </>
         )
      };


  export default Counter;