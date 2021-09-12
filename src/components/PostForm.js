import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, getPosts } from "../actions/post.action";

// component PostForm pour notre formulaire (haut de page),

const PostForm = () => {
  // faut d'abord se récupérer toutes les infos écritent dans ces inputs
  const [title, setTitle] = useState(" ");
  const [content, setContent] = useState(" ");
  // on a besoin de l'info du pseudo de l'utilisateur ; avec le HOOK useSelector
  // useSelector se présent tjrs comme ça!
  const user = useSelector((state) => state.userReducer);
  // avec useDispatch ; on dispatch des actions de l'utilisateur (voir fct handleSubmit)
  const dispatch = useDispatch();

  //pr récupérer valeur input dans React; onChange={e => setTitle(e.target.value)}
  // événement sur soumission du formulaire: en React c onSubmit
  // on code la fct handleSubmit:  pour le preventDefault (éviter rechargement de page) ; comme suite
  // on se fait la var DATA pr stocker dedans la data à envoyer aprés soumission du formulaire
  const handleForm = async (e) => {
    e.preventDefault();
    if (title && content) {
      const data = {
        title: title,
        content: content,
        // author: user[0].pseudo, // ma DB User n'est pas lu! à vérifier!!
        author: "adel",
        likes: 0,
      };
      // on passe tt ça aux actions ; il nous manque un Dispatch
      // mainteant on va faire des dispatch aux actions de l'utilisateur (pas seulement quand la page s'ouvre comme avant "voir index.js")
      // on fait comme suite:   dispatch(addPost(data));
      await dispatch(addPost(data));
      // pr faire un reset du formulaire aprés chaque soumission du form
      setTitle("");
      setContent("");
      // car l'id est utile pr faire des éditions et des suppréssions!!! c comme ça qu'on va pointer dans ka DB l'article en question
      // c pr ça qu'il faut quand on crée un nouvel artcicle qu'on demade à la DB (le Back)
      // on a pas le choix; faut passer par la DB car c la DB qui met l'ID
      // comme on a à chaque fois un nouvel ID (généré pr chaque nouvel publication); faut faire un appel à la DB comme ça:
      dispatch(getPosts());
      // pr être sûre que l'ID à été mis avant de lancer le getPosts; on met la fct en async et on met : await (voir plus haut)
      // ce qui veut dire tt ce code là ( aprés: dispatch(addPost(data)) ) ; va attendre que la data soit bien ajouté!
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleForm(e)}>
        <input
          type="text"
          placeholder="Titre du poste"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Postez vos pensées..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
