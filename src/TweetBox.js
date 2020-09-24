import React, { useState } from 'react'
import "./TweetBox.css";
import { Avatar, Button} from "@material-ui/core";
import db from './firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = e => {
        e.preventDefault();
        
        db.collection('posts').add({
            
        })
    }

    return (
        <div className = "tweetBox">
            <form action="">
                <div className="tweetBox__input">
                    <Avatar src="https://mworldvision.com/uploads/testimonial/1581067121_mavtar.jpg"/>
                    
                    <input onChange={(e)=>setTweetMessage(e.target.value)}
                           value={tweetMessage}
                           placeholder="What's happening?"
                           type="text"/>
                </div>
                <input onChange={(e)=>setTweetImage(e.target.value)}
                       value={tweetImage}
                       className="tweetBox__imageInput"
                       placeholder="Optional: Enter image URL"
                       type="text"/>

                <Button onClick={sendTweet} type='Submit' className="tweetBox__tweetButton">Tweet</Button>

            </form>
            
        </div>
    )
}

export default TweetBox;
