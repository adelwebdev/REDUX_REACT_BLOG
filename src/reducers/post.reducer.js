// on fait comme suit pr créer des reducers
// faire un initial state (de base) et un export default function avec 2 papamètres
// les 2 params; state et action (tous le sreducers se présentent de cette façon!!!)
// c dans le return que ça se passe! (ce que fait le reducer)

const initialState = { stateDeBase: "hello" };

export default function postReducer(state = initialState, action) {
  return initialState;
}
