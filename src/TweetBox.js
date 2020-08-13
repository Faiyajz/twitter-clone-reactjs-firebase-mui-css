import React from 'react'
import "./TweetBox.css";
import { Avatar, Button} from "@material-ui/core";

function TweetBox() {
    return (
        <div className = "tweetBox">
            <form action="">
                <div className="tweetBox__input">
                    <Avatar src="https://mworldvision.com/uploads/testimonial/1581067121_mavtar.jpg"/>
                    <input placeholder="What's happening?" type="text"/>
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"/>

                <Button className="tweetBox__tweetButton">Tweet</Button>

            </form>
            
        </div>
    )
}

export default TweetBox;
