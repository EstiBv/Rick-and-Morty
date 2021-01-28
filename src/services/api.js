const getDataApi = () => {
  return fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => {
      // chosen exact data
      return data.results;
    })
    .catch((error) => console.log("Ha sucedido un error"));
};
export default getDataApi;
