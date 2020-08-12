import React from 'react'
import "./TweetBox.css";
import { Avatar, Button} from "@material-ui/core";

function TweetBox() {
    return (
        <div className = "tweetbox">
            <form action="">
                <div className="tweetBox__input">
                    <Avatar src="https://mworldvision.com/uploads/testimonial/1581067121_mavtar.jpg"/>
                    <input placeholder="What's happening?" type="text"/>

                </div>
                <Button>Tweet</Button>

            </form>
            
        </div>
    )
}

export default TweetBox;
