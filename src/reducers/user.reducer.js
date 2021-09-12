// un autre reducer
// post.reducer et user.reducer comme 2 sous-parties pr stocker le reducer
// c avec ces 2 qu'on va créer les mouvements dynamique en Front-end!
// ici aussi on utilise le switch de la même façon! avec switch (action.type)
import { GET_USER, ADD_USER_LIKE } from "../actions/user.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.Payload;
    case ADD_USER_LIKE:
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            likes: action.payload.likes,
          };
        } else return user;
        // c au final comme le "put" mais différent pour les likes (likes à la place de content)
        // si on sort du if (le else) alors on return user; sinon ça le fait disparraitre du store
      });
    default:
      return state;
  }
}
// on return le state qui évolue en permanence, il passe de zéro (initialState = {}) à ex: action.payload ce qu'on obtient avec Get sur DB Users
// le state sera égale à ce qu'il y a dans action.payload ensuite il évolura de façon dynamique
// pr se le jouer dès que l'appli est lancé (même principe que avec db posts) voir : index.js
