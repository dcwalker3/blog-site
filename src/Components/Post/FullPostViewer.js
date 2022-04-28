import { React, useEffect, useState } from 'react'

import {
    useLocation
} from 'react-router-dom'

const axios = require('axios');

export default function FullPostViewer() {
    const [post, setPost] = useState([]);

    const search = new URLSearchParams(useLocation().search);



  useEffect(() => {
    const id = search.get('id');
    axios.get(`http://localhost:4000/post/${id}`)
        .then(res => {
            let date = new Date(res.data.date);
            res.data.date = date.toDateString();
            setPost(res.data);
        })
        .catch(err => console.log(err));

  });
 
  return (
    <div className='post w-75 mt-5'>
        <h4 className='post-title'>{post.title}</h4>
        <div className='post-date'>Created At: {post.date}</div>
        <div className='post-author'>By: {post.author}</div>
        <hr/>
        <div className='post-body'>{post.body}</div>
    </div>
  )
}
