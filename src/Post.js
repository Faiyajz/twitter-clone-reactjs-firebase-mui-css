import React from 'react'
import "./Post.css";
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import PublishIcon from '@material-ui/icons/Publish';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://mworldvision.com/uploads/testimonial/1581067121_mavtar.jpg"/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Faiyaj Zaman {" "} <span> <VerifiedUserIcon className="post__badge"/></span>
                        </h3>
                    </div>
                </div>
                <div className="post__headerDescription">
                    <p> Here goes the header description </p>
                </div>
                <img src="https://media.giphy.com/media/huyZxIJvtqVeRp7QcS/giphy.gif" alt=""/>

                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>

            </div>
            
        </div>
    )
}

export default Post;
