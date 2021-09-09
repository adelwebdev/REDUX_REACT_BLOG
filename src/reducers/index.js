// créer dossier reducers (qui contient les reducers) et faire cet import : import { combineReducers } from "redux";
// y mettre tous les reducers qu'on va créer ; dans le dossier reducers
// postReducer pr les messages
// userReducer pr les utilisateurs
import { combineReducers } from "redux";
import postReducer from "./post.reducer";
import userReducer from "./user.reducer";
// fichier maître de reducers c index.js ( ici!! qui est fait dans dossier : reducers )
// ensuite on s'appelle combineReducers au plus haut (donc dans l'index.js à la racine du dossier "du projet")

export default combineReducers({
  postReducer,
  userReducer,
});
