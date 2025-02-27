import React from 'react';

const List = () => {
       const fruits=["apple", "mango","pineapple","Banana","apple"];
       const result=fruits.map((value,index)=><h1 key={index}>{value}</h1>)
  return (
    <div>
      <p>Hey!</p>
      <p>{result}</p>
    </div>
  )
}

export default List;
