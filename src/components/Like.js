import React from "react";

//component Like pour nos like

const Like = ({ post }) => {
  return (
    <div>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
