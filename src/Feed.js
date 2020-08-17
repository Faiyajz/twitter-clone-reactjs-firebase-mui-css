import React, {useState,useEffect} from 'react';
import TweetBox from "./TweetBox";
import Post from "./Post";
import './Feed.css';
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapShot => (
            setPosts(snapShot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
        <div className="feed">
            <div className ="feed__header">
                {/* Header */}
                <h2>Home</h2>
            </div>

            {/* TweetBox*/}
            <TweetBox/>

            {/* Post */}
            {posts.map((post)=>(
                <Post 
                displayName={post.displayName}
                username={post.username}
                verified ={post.verified} 
                text={post.text} 
                avatar={post.avatar} 
                image={post.image}
                />
            ))}

        </div>
    );
}

export default Feed;
