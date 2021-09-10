import React from "react";
import { useSelector } from "react-redux";
import PostForm from "./components/PostForm";
import User from "./components/User";
import Post from "./components/Post";
import { isEmpty } from "./components/Utils";

// pas de router ici , on a une seule page, tout se passe dans les components!
// pr commencer blog (ou API Back) en Redux (ici React-Redux) ; reprendr le même précodage des Components ici;

// avant de créer le Store (trés important en Redux); il faut créer un Provider qui englobe  notre App ; il faut faire ça dans Index.js

const App = () => {
  // comment se mapper (map) la data dans Redux: voir ce qui suit!
  // d'abord créer une variable et stocker dedant: on appelle le HOOK useSelector (vérifier son importation)
  // ensuite écrire ce qui suit: avec useSelector; on va se chercher les éléments (data)
  const posts = useSelector((state) => state.postReducer);
  console.log(posts);
  // et on utilise la méthode "map" ; voir dans return (avec index fait office de key pr le map)
  //explicationde isEmpty: "si la const posts n'est pas vide alors tu joues le map" attention! bien importer isEmpty!!
  // les authentifications n'ont rien à voir avec Redux!

  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          {!isEmpty(posts) &&
            posts.map((post, index) => <Post post={post} key={index} />)}
        </div>
        <User />
      </div>
    </div>
  );
};

export default App;
