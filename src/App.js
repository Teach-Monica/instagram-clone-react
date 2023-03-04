import React, {useState, useEffect}from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

export default function App() {
    const [posts,setPosts]=useState([]);
    
    //useEffect ->runs a piece of code based on the specific condition
    useEffect(() => {
      //this is were the code runs
      db.collection("posts").onSnapshot(snapshot=>{
        //every single time a new post is added, this code fire
        setPosts(snapshot.docs.map(doc=>doc.data()))
        
        //data() has a caption,username,imageurl
        // log
      })
    }, []);

  return (
    <div className="App">
    {/* header */}
    <div className="app__header">
      <img className="app__headerImage" 
      src="https://www.instagram.com/static/Images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
      alt="appLogo"  
      />
    </div>
     
    {/* poster */}
     {posts.map((post)=>
      <Post userName={post.userName} imageUrl={post.imageUrl} caption={post.caption}/>
      )}
    
     
    
      
    </div>
  );
}


