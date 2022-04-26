import { React, useState, useEffect } from 'react'

import Post from './Post';

const axios = require('axios');

export default function ShowAllPosts() {
    const [posts, setPosts] = useState([]);
    const [reload, setReload] = useState(false);
  
    useEffect(() => {
      axios.get('http://localhost:4000/post')
        .then(res => {
          console.log(res)
          setPosts(res.data);
        })
        .catch(err => console.log(err));
    }, [reload]);
  

  return (
    <div className='posts-container'>
        {
            posts.map(post => {
                return(<Post post={post} key={post._id} reload={reload} setReload={setReload}/>)
            })
        }
    </div>
  )
}
