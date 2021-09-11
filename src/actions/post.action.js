// Get renvoie de la data, c cette data qu'on veut chercher et mettre dans notre Store ensuite accessible de partout dans notre App
// pr les actions, d'abord créer dossier actions et fichier : post.action.js
// les actions se présentent tjrs comme ça! à faire comme ça!!!
// pr avoir la data dans ordre décroissant ; dans lien ajouter: ?_sort=id&_order=desc
import axios from "axios";

// pr ajouter des msg's on va parametrer d'abord un addPost : envoyer à la DB
// ensuite (aprés envoie) dispatcher au Reducer les info (attention y a nouveaux posts)
// on ajoute ADD_POSTS

export const GET_POSTS = "GET_POSTS";
export const ADD_POSTS = "ADD_POSTS";

export const getPosts = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3001/posts?_sort=id&_order=desc")
      .then((res) => {
        dispatch({ type: GET_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
// il faut récupérer cette data pour type: GET_POSTS ; faut aller dans notre Reducer et lui dire comment traiter ça

// ICI METHODE POST (CRUD)
// d'abord on copie getPosts (plus haut) et on le change: addPost
export const addPost = (data) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/posts", data)
      .then((res) => {
        dispatch({ type: ADD_POSTS, payload: data });
      })
      .catch((err) => console.log(err));
  };
};
// on ne peut pas savoir encore si ça marche ; faut aller dans post.reducer et lui expliquer comment traiter cette data du ADD_POST
