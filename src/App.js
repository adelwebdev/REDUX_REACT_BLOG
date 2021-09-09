import React from "react";
import PostForm from "./components/PostForm";
import User from "./components/User";

// pas de router ici , on a une seule page, tout se passe dans les components!
// pr commencer blog (ou API Back) en Redux (ici React-Redux) ; reprendr le même précodage des Components ici;

// avant de créer le Store (trés important en Redux); il faut créer un Provider qui englobe  notre App ; il faut faire ça dans Index.js

const App = () => {
  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">CONTENU</div>
        <User />
      </div>
    </div>
  );
};

export default App;
