import React from 'react'

import {
  Button
} from 'react-bootstrap';


import "./StyleSheets/post.css";

export default function Post(props) {
  let { post } = props
  const MAX_LENGTH = 250;
  let date = new Date(post.date);
  post.date = date.toDateString();
    
  return (
    <div className='post'>
        <h4>{post.title}</h4>
        <div className='post-date'>Created At: {post.date}</div>
        <div className='post-author'>By: {post.author}</div>
        <hr/>
        <div className='post-body'>
          {
            post.body.length > MAX_LENGTH ? showShort(post, MAX_LENGTH, post._id) : showAll(post)
          }
        </div>
    </div>
  )
}


function showAll(post) {
  return post.body
}

function showShort(post, MAX_LENGTH, id) {
  return (
    <>
      {post.body.slice(0, MAX_LENGTH)} ...
      <div className='show-more-button'>
      <a href={`/post?id=${id}`}><Button>Read More</Button></a>
      </div>
    </>
  )

}