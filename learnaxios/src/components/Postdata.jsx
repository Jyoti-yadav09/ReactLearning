import React, { useState } from 'react';
import axios from 'axios';

const Postdata = () => {
    const[title, setTitle]=useState('');
    const[content, setContent]=useState('');

     const handleSubmit=(event)=>
     {
         event.preventDefault();

          const postData={
             title,
             body:content,
             userId:1
          };

          axios.post('https://jsonplaceholder.typicode.com/posts', postData)
          .then(response=>{
             console.log('Post Created:', response.data);
          })
          .catch(error=>
          {
             console.error('Error creating post:', error);
          }
          );

     }
  return (
    <div>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div> 
            <label>Title:</label>
             <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
        
            </div>
         <div>
            <label>
                Content:
            </label>
            <textarea value={content} onChange={(e)=> setContent(e.target.value)}></textarea>
         </div>

              <button type="submit">Submit</button>


      </form>
    </div>
  )
}

export default Postdata;
