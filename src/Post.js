import React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';

export default function Post({userName,imageUrl,caption}) {
  return (
    <div className='post'>
        <div className="post__header">
        <Avatar 
         className="post__avatar"
         alt={userName}
         src="/static/images/avatar/1.jpg" />
        <h3>{userName}</h3>
        </div>
         
        {/* header -> avatar + username */}
      
      <img className='post__image' 
      src={imageUrl} 
      alt=""/>
        {/* image */}
      
      <h4 className='post__text'><strong>{userName}</strong>{caption}</h4>
      {/* username + caption */}
    </div>
  );
}


