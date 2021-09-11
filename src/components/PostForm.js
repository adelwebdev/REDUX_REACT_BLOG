import React from "react";

// component PostForm pour notre formulaire (haut de page),

const PostForm = () => {
  // faut d'abord se récupérer toutes les infos ecrit dans ces inputs
  return (
    <div className="form-container">
      <form>
        <input type="text" placeholder="Titre du poste" />
        <textarea placeholder="Postez vos pensées..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
