import React from 'react'
import TweetBox from "./TweetBox";
import Post from "./Post";
import './Feed.css'

function Feed() {
    return (
        <div className="feed">
            <div className ="feed__header">
                {/* Header */}
                <h2>Home</h2>
            </div>

            {/* TweetBox*/}
            <TweetBox/>

            {/* Post */}
            <Post displayName="Md. Faiyaj Zaman" username="faiyajz007" verified ={true} text="It's working!" avatar="https://mworldvision.com/uploads/testimonial/1581067121_mavtar.jpg" image="https://media.giphy.com/media/5Uz5vRLUMSwWJnGh0a/giphy.gif"/>
            <Post/>
        </div>
    );
}

export default Feed;
