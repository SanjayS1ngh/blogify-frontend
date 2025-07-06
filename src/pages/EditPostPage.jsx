import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const EditPostPage = () => {
    const navigate=useNavigate();
    async function handleUpdatedSubmit(e){
        e.preventDefault();
        await fetch(`/api/blog/edit/${id}`,{
            method:'POST',
              headers: {

            'Content-Type': 'application/json', 
        },
          body: JSON.stringify({
      title: title,     
      content: content 
    }),

        });
        navigate(`/blog/${id}`)
    }
    const {id}=useParams();
    const[title,setTitle]=useState("");
    const [content,setContent]=useState("");
    useEffect(()=>{
        fetch(`/api/blog/${id}`).then(res=>{
           return res.json();
        }).then(data=>{
            setTitle(data.title);
            setContent(data.content);
        })

    },[id])
  return (
    <div>
        <form onSubmit={handleUpdatedSubmit}>
        <input type="text" value={title} onChange={e=>setTitle(e.target.value)} />
        <textarea value={content} onChange={e=>setContent(e.target.value)}></textarea>
        <button type="submit">Done</button>
        
        </form>
      
    </div>
  )
}

export default EditPostPage
