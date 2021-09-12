import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../actions/post.action";
import { addUserLike } from "../actions/user.action";

// component Like pour nos like
// maintenant va gérer le compteur de like! on appuyant sur la petite main; on va déclencher une action
// action pr incrémenter le compteur de like de l'article et le compteur de like de notre utilisateur
// pr ajouter des likes ; faut éditer le compteur dans notre DB (pr db posts et db users)
// faut alors faire 2 dispatch différents; un pour post.reducer et un autre pour user.reducer

const Like = ({ post }) => {
  // on va dans le store; et on lui dit: ceci
  const user = useSelector((state) => state.userReducer);
  // on définit la fct handleLike et l'objet postData et userData pour comptage des likes
  // maintenant faut dispatcher ces deux informations!
  const dispatch = useDispatch();

  const handleLike = () => {
    const postData = {
      title: post.title,
      author: post.author,
      content: post.content,
      likes: ++post.likes,
      // c likes qui doit changer réellement; on redéfinit les autres à cause de json server (sinon il éfface tout)
      // ++post.likes (avec les + à gauche) signifie qu'il reprend le chiffre et il lui fait +1 (pr pérformance c mieux à gauche )
      id: post.id,
    };
    const userData = {
      pseudo: user[0].pseudo,
      likes: ++user[0].likes,
      id: post.id,
    };
    dispatch(addLike(postData));
    dispatch(addUserLike(userData));
  };
  // faut reprendre le return comme ce qui suit!!!
  return (
    <div onClick={handleLike}>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
