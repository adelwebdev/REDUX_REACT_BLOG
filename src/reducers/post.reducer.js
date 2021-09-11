// on fait comme suit pr créer des reducers
// faire un initial state (de base) et un export default function avec 2 papamètres
// les 2 params; state et action (tous le sreducers se présentent de cette façon!!!)
// c dans le return que ça se passe! (ce que fait le reducer)
import { GET_POSTS, ADD_POSTS } from "../actions/post.action";

// const initialState = { stateDeBase: "hello" };
// export default function postReducer(state = initialState, action) {
//   return initialState;
// }      CA C'ETAIT AVANT QU'ON NE CREE LES ACTIONS

// maintenant aprés création de la fct getPosts (fichier: post.action.js)
const initialState = {};
// dans notre reducer ; c là qu'on va créer le Switch!!
// on ajoute ici ADD_POSTS avec un nouveau case
// on ajoute le nouveau post (action.payload); on l'ajoute comme ça ""...state"
//  si on fait [state] on aurait action.payload et un array (avec les points ... on secupèrent les données du state et on ajoute le nouveau post)
// on a crée l'action, on a crée le reducer , mainteant faut lancer l'action (c dans le form: PostForm.js)
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POSTS:
      return [action.payload, ...state];
    default:
      return state;
  }
}
// en faisant action.payload: il prend tt la contenance de payload (notre data avec Get) et il va la mettre dans initial state
// ensuite cette data sera regroupé dans index.js (tt les reducers) qui mènent à l'index.js et qui sont dans le Store
// on a crée la fonction, on a crée l'action, l'action qui va chercher la data et qui l'exploite pr incrémenter notre Store
// par contre on ne l'appelle pas encore; on veut la data soit dispo dès l'ouverture de l'App; on fait ça dans index.js racine (voir fichier)
