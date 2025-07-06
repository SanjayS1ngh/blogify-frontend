import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import BlogPost from '../components/BlogPost';
import "../App.css"
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate=useNavigate();
   const[blogs,setBlogs]=useState([]);
  useEffect(()=>{
    fetch("/api/").then(Res=>{
      return Res.json();
    }).then(data=>{
      // console.log("data recieved ",data);
      setBlogs(data);
    }).catch(err=>{
      console.log("error: ",err);
    })
  },[])
    return (
    <div >
      <h1>my blogs</h1>
      {blogs.map(blog=>(
        <div className="blog-post"  key={blog._id} onClick={()=>{navigate(`/blog/${blog._id}`)}}>
        
        <BlogPost  title={blog.title} content={blog.content}></BlogPost>
        </div>
      ))}
    </div>
  )
}

export default Homepage
