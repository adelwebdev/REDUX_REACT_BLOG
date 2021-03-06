// Get renvoie de la data, c cette data qu'on veut chercher et mettre dans notre Store ensuite accessible de partout dans notre App
// pr les actions, d'abord créer dossier actions et fichier : post.action.js
// les actions se présentent tjrs comme ça! à faire comme ça!!!
// pr avoir la data dans ordre décroissant ; dans lien ajouter: ?_sort=id&_order=desc
import axios from "axios";

// pr ajouter des msg's on va parametrer d'abord un addPost : envoyer à la DB
// ensuite (aprés envoie) dispatcher au Reducer les info (attention y a des nouveaux posts)
// on ajoute ADD_POSTS

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
// pr exploiter la data modifiée dans les actions c EDIT_POST
export const EDIT_POST = "EDIT_POST";
// pr suppression de la data c DELETE_POST
export const DELETE_POST = "DELETE_POST";
// pr ajouter des likes
export const ADD_LIKE = "ADD_LIKE";

// ICI METHODE GET (CRUD)
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
        dispatch({ type: ADD_POST, payload: data });
      })
      .catch((err) => console.log(err));
  };
};
// on ne peut pas savoir encore si ça marche ; faut aller dans post.reducer et lui expliquer comment traiter cette data du ADD_POST

// ICI METHODE EDIT (CRUD)
// d'abord on copie addPost (plus haut) et on le change: editPost
// présenter axions pr méthode "put" comme suit (c mieux) (il nous faut l'ID de msg en question!!)
// avec les points (...data) c pour envoyer la data en spread operator
export const editPost = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3001/posts/${data.id}`,
      data: { ...data },
    })
      .then((res) => {
        dispatch({ type: EDIT_POST, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};

// ICI METHODE DELETE (CRUD) à faire comme suit: avec postId
export const deletePost = (postId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      // ATTENTION!!! à faire avec guillements de la touche 7 (pr ci-bàs)
      url: `http://localhost:3001/posts/${postId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_POST, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};
// et là nous avons réussie à faire in CRUD (create, read, update, delete)

// ICI PROCEDURE POUR AJOUTER DES LIKES
// là on fait la logique pr ajout de likes
// on reprend la logique de "put"
export const addLike = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3001/posts/${data.id}`,
      data: { ...data },
    })
      .then((res) => {
        dispatch({ type: ADD_LIKE, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};
