import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom'
import BlogPost from '../components/BlogPost';


const SinglePostPage = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const[blog,setBlog]=useState(null);

    function handleEditClick(){
        navigate(`/blog/edit/${id}`)
    }
    async function handleDeleteClick(){
        await fetch(`/api/blog/delete/${id}`,{method:'POST'})
        navigate("/");
    }


    useEffect(()=>{
        fetch(`/api/blog/${id}`).then(res=>{
             return res.json();
    }).then(data=>{
      setBlog(data);
    }).catch(err=>{
      console.log("error: ",err);
        })
    },[id])
    if (!blog) {
  return <h1>Loading...</h1>;
}
  return (
    <div>
     <BlogPost title={blog.title} content={blog.content}></BlogPost> 
     <div className="action-buttons">
        <button onClick={handleEditClick}>edit</button>
        <button onClick={handleDeleteClick}>  delete</button>
     </div>
    </div>
  )
}

export default SinglePostPage
