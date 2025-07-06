import React from 'react'
import { useState } from 'react';

import { useNavigate } from 'react-router-dom'
const AddPostPage = () => {
    const[title,setTitle]=useState("");
    const [content,setContent]=useState("");
     const navigate=useNavigate();
    async function handleCreateSubmit(e){
        e.preventDefault();
        await fetch(`/api/blog/submit`,{
            method:'POST',
              headers: {

            'Content-Type': 'application/json', 
        },
          body: JSON.stringify({
      title: title,     
      content: content 
    }),

        });
        navigate(`/`)
    }
    
    
  return (
    <div>
      <form onSubmit={handleCreateSubmit}>
        <input type="text" value={title} onChange={e=>setTitle(e.target.value)} />
        <textarea value={content} onChange={e=>setContent(e.target.value)}></textarea>
        <button type="submit">Done</button>
        
        </form>
    </div>
  )
}

export default AddPostPage
