// d'abord on prend le contenu de post.action.js, on le copie ici et au lieu de GET_POSTS c : GET_USER
// pour info : on dispatch dans le store!
import axios from "axios";

export const GET_USER = "GET_USER";
export const ADD_USER_LIKE = "ADD_USER_LIKE";

export const getUser = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3001/users")
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// ICI PROCEDURE POUR AJOUTER DES LIKES
// là on fait la logique pr ajout de likes
// on reprend la logique de "put"
export const addUserLike = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3001/posts/${data.id}`,
      data: { ...data },
    })
      .then((res) => {
        dispatch({ type: ADD_USER_LIKE, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};
