import App from "./App";
// import "./styles/index.scss";

// import React
import React from "react";
import ReactDOM from "react-dom";
// import Redux
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// ici import de rootReducer! JS de base va lire l'index.js dans dossier reducers
import rootReducer from "./reducers";
//-------------------------------------

// d'abord avant tout en Redux et dans ce fichier (ici!!) créer le PROVIDER!! qui envelopera toute l'App; à faire ICI dans index.js! comme suite:
// comme suite: " Provider store={store} " englobe l'app ; comme ci-dessou!

// créer variable constante store ; elle contient méthode createStore (qui est méthode de Redux) ;
// dans createStore y a le Reducer qui les regroupe tous; il s'appelle rootReducer (pr créer fichier reducer on va faire un fichier index.js ; qu'on va créer dans dossier reducers)

// se que sera rootReducer est : combineReducers (la somme de tous nos reducers) qui va constituer NOTRE STORE !!!!!
// on fait createStore avec rootReducer ;
const store = createStore(
  rootReducer,
  //ce qui est en-bàs c pr utiliser devTools et nous aider à developper!
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
