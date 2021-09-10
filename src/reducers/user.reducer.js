// un autre reducer
// post.reducer et user.reducer comme 2 sous-partie pr stocker le reducer
// c avec ces 2 qu'on va créer les mouvements dynamique en Front-end!
// ici aussi on utilise le switch de la même façon! avec switch (action.type)
import { GET_USER } from "../actions/user.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.Payload;
    default:
      return state;
  }
}
// on return le state qui évolue en permanence, il passe de zéro (initialState = {}) à ex: action.payload ce qu'on obtien avec Get sur DB Users
// le state sera égale à ce qu'il y a dans action.payload ensuite il évolura de façon dynamique
// pr se le jouer dès que l'appli est lancé (même principe que avec db posts) voir : index.js
