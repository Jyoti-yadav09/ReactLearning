//import Learnlazy from "./Learnlazy";
import React, {Suspense} from "react";
 const Learnlazy=React.lazy(()=>import('./Learnlazy'));
function App() {
 

  return (
    <>
      <h1>Learning Lazy Loading</h1>
      <Suspense fallback={<div>loading data...</div>}>
      <Learnlazy/>

      </Suspense>
     
    </>
  )
}

export default App;
