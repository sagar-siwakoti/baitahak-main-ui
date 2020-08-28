import React from "react";
import "../../styles/Feed/Feed.css";
import PostBox from "../PostBox/PostBox"
import FlareIcon from '@material-ui/icons/Flare';
import Post from "../Post/Post";

function Feed(props) {
  return (
    <div className="feed">
      {/*Header*/}
      <div className="feed__header">
        <h2>Home</h2>
          <FlareIcon />
      </div>
      {/*Tweet/Post Box*/}
      <PostBox />
      {/*Post*/}
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
