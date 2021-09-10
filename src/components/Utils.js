// si on a : TypeError: posts.map is not a function...
// faudrai utiliser useEffect() et attendre que le component est monté ou le store est remplis
// ou on peut utiliser la fct isEmpty; elle permet de vérifier qu'un élément n'est pas vide
// on va lui dire: on va tester:  {!isEmpty(posts) && posts.map((post, index)  --voir app.js

export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};
