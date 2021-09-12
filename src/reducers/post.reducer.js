// on fait comme suit pr créer des reducers
// faire un initial state (de base) et un export default function avec 2 papamètres
// les 2 params; state et action (tous le sreducers se présentent de cette façon!!!)
// c dans le return que ça se passe! (ce que fait le reducer)
import {
  GET_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_LIKE,
} from "../actions/post.action";

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
// pr le EDIT, on prend le state, on fait un map de chaque posts individuellement, et on trouve le post qui correspond à notre ID
// on fait post.id === action.payload.id, celui qui a le bon ID on lui change son content! avec return
// on retourn tt pour pas que sa écrase, (voir le return pour case EDIT_POST)
// par contre notre content sera : action.payload.content / on ajoute un else: sinon tu retournes tt les messages (si on met pas le else!, notre store sera VIDE!!!! )
// pr case: DELETE_POST; on retourn le state - (moins) le post (à supprimer); on fait ça avec méthode: filter
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POST:
      return [action.payload, ...state];
    case EDIT_POST:
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            content: action.payload.content,
          };
        } else return post;
      });
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload.postId);
    // on faisant comme ça on va supprimer ; on va se remapper tous les posts sauf celui qui correspond à celui qu'on a enlevé!

    case ADD_LIKE:
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            likes: action.payload.likes,
          };
        } else return post;
        // c au final comme le "put" mais différent pour les likes (likes à la place de content)
        // si on sort du if (le else) alors on return post; sinon ça le fait disparraitre du store
      });
    default:
      return state;
  }
}

// en faisant action.payload: il prend tt la contenance de payload (notre data avec Get) et il va la mettre dans initial state
// ensuite cette data sera regroupé dans index.js (tt les reducers) qui mènent à l'index.js et qui sont dans le Store
// on a crée la fonction, on a crée l'action, l'action qui va chercher la data et qui l'exploite pr incrémenter notre Store
// par contre on ne l'appelle pas encore; on veut la data soit dispo dès l'ouverture de l'App; on fait ça dans index.js racine (voir fichier)
