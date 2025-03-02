import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Getdata = () => {
  const[data, setData]=useState([]);
  const[loading, setLoading]=useState(true);

  useEffect(()=>
{
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(response=>
     {
         setData(response.data);
         setLoading(false);
     }
     )
     .catch(error=>{
         console.error('There was an error fetching the data', error);
         setLoading(false);
     }
     );

}, []);



  return (
    <div>
      <h1>Posts</h1>
      {loading?
      (
        <p>Loading...</p>
      ):(<ul>{data.map(post=>(<li key={post.id}>{post.title} </li>
                            
        
      ))}</ul>)}
    </div>
  )
}

 
export default Getdata;
