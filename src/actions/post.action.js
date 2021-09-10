// Get renvoie de la data, c cette data qu'on veut chercher et mettre dans notre Store ensuite accessible de partout dans notre App
// pr les actions, d'abord créer dossier actions et fichier : post.action.js
// les actions se présentent tjrs comme ça! à faire comme ça!!!
// pr avoir la data dans ordre décroissant ; dans lien ajouter: ?_sort=id&_order=desc
import axios from "axios";

export const GET_POSTS = "GET_POSTS";

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
// il faut récupérer cette data pr type: GET_POSTS ; faut aller dans notre Reducer et lui dire comment traiter ça
