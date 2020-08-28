import React, { useState } from "react";
import "../../styles/PostBox/PostBox.css";
import { Avatar, Button } from "@material-ui/core";

function PostBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  return (
    <div className="postBox">
      <form>
        <div className="postBox__input">
          <Avatar src="https://avatarfiles.alphacoders.com/209/thumb-209040.jpg" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="postBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button className="postBox__postButton">Post</Button>
      </form>
    </div>
  );
}

export default PostBox;
