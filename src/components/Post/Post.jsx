import React, { forwardRef } from "react";
import "../../styles/Post/Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" >
        <div className="post__avatar">
          <Avatar src="https://avatarfiles.alphacoders.com/209/thumb-209040.jpg" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                Joker{" "}
                <span className="post__headerSpecial">
                  <VerifiedUserIcon className="post__badge" />
                  @joker
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>Suppppppp Bitch</p>
            </div>
          </div>
          <img src="data:image/jpeg;base64,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" alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
