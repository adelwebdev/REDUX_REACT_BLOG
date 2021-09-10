import React from "react";
import Like from "./Like";

// component Post pr design des msg, et les msg qu'on va lister dans la page web
// on a destructuré ici ; au lieu de ({ post }) on peut écrire: (props.post)
const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />

      <p>{post.content}</p>

      <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>
    </div>
  );
};

export default Post;
