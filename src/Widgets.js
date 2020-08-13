import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";

import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's Happening?</h2>
                <TwitterTweetEmbed tweetId={"526534593826938881"}/>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="Twitter"
                  options={{ height: 400}}
                />
                <TwitterShareButton
                    url ={"https://facebook.com/faiyajz"}
                    options= {{text: "#reactjs is awesome", via:"Twitter"}}
                />

            </div>


        </div>
    )
}

export default Widgets;
