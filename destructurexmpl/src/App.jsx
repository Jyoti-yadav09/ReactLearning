import React from "react";
import Profile from "/src/Profile";
function App() {
    const user={
      name:'Jyoti',
      age:22,
    };

  return (
    <>
      <h1>Hello</h1>
      <Profile name={user.name}/>
      <Profile age={user.age}/>
    </>
  )
}

export default App;
