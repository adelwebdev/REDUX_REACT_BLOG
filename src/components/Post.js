import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, editPost } from "../actions/post.action";
import Like from "./Like";
import { isEmpty } from "./Utils";

// component Post pr design des msg, et les msg qu'on va lister dans la page web
// on a destructuré ici ; au lieu de ({ post }) on peut écrire: (props.post)

const Post = ({ post }) => {
  // on vérifie d'abord si l'utiisateur est bien l'auteur de l'article (pr pas qu'il supprime des article qui ne sont pas à lui)
  // on crée d'abord var user
  const user = useSelector((state) => state.userReducer);
  // ensuite on fait comme tel: {!isEmpty(user[0]) && user[0].pseudo .... ect (voir en bàs)}
  // ici le post.author il est égal au pseudo de notre utilisateur!
  // on crée un toggle: const editToggle ...
  const [editToggle, setEditToggle] = useState(false);
  // il sera sur "true" quand on clicke pr éditer notre texte, on met onClick dans l'image du edit
  // et tu met l'inverse de editToggle; comme suite ( setEditToggle(!editToggle) )
  // ici prob avec db user; j'enlève {!isEmpty(user[0]) && user[0].pseudo === post.author && ( ) : pr vérifier que c le même utilisateur
  // {!isEmpty(user[0]) && user[0].pseudo === post.author && (tt mettre à l'intéreur avant le <h2>)}
  // malheuresement là on peut edite et delete pr tt les articles (même dont les auteurs sont différents) (voir erreur avec db user)
  // si toggle est sur true alors affiche input à la place de notre paragraphe <p> (voir plus bàs dans  : editToggle ?)
  // faut remettre le prevent.default() dans le nouveau form (pr éviter rechargement de page)
  // ici fct handleSubmit pr éviter rechargement de la page aprés soumission du nouveau form avec les modifications (méthode edit)
  // faire le HOOK editContent pr stocker les modifs aprés éditions, attention!! sa valeur de base : post.content!!!!!!!
  const [editContent, setEditContent] = useState(post.content);
  // appel du HOOK useDispatch();
  const dispatch = useDispatch();
  // codage de la fct handleEdit (en cas d'édition des msg)
  // quand on bosse avec une vrai DB (pas Json server) on a besoin de changer que editContent (où il y des modifs) ici on refait tt car il écrasera sinon
  const handleEdit = (e) => {
    e.preventDefault();
    const postData = {
      title: post.title,
      // author: user[0].pseudo,     (je suis obligé car problème avec db user)
      author: "Adel et oui!",
      content: editContent,
      likes: post.likes,
      id: post.id,
    };
    // on dispatch la fct editPost et on lui passe postData
    dispatch(editPost(postData));
    // aprés soumission du form; faut pas oublier de mettre setEditToggle sur false
    setEditToggle(false);
    // on reprend tt cette data et on va se l'exploiter dans les actions!
  };
  // mainteant tt est stocké dans postData (prés à être édité) par contre faut transmettre c données là!!
  // pt ça faut tjrs appeler le HOOK dispatch; c lui qui va joindre l'action (fait plus haut avec les const)
  // maintenant la suppression; (crud) on va dispatcher une fct qui va nous supprimer! faut juste passer l'ID du post
  // on le fait ainsi : onClick={() => dispatch(deletePost(post.id))} ;
  return (
    <div className="post">
      <div className="edit-delete">
        <img
          onClick={() => setEditToggle(!editToggle)}
          src="/public/icons/edit.svg"
          alt="edit"
        />
        <img
          src="/public/icons/delete.svg"
          alt="delete"
          onClick={() => dispatch(deletePost(post.id))}
        />
      </div>
      <h2>{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />
      {editToggle ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <textarea
            default
            value={post.content}
            onChange={(e) => setEditContent(e.target.value)}
          >
            <input type="submit" value="valider modification"></input>
          </textarea>
        </form>
      ) : (
        <p>{post.content}</p>
      )}
      <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>
    </div>
  );
};

export default Post;
