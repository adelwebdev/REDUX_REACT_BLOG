// d'abord on prend le contenu de post.action.js et au lieu de GET_POSTS c : GET_USER
import axios from "axios";

export const GET_USER = " GET_USER";

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
