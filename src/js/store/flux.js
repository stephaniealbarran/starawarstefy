

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorite: [],
      planets: [],
      vehicles: [],
      characters: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      fetchCharacters: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((response) => response.json())
          .then((data) => {
            return data;
          })
          .then(async (data) => {
            data.results.forEach(async (character, index) => {
              // console.log(character.url);
              const { url } = character;
              const response = await fetch(url);
              const info = await response.json();
              data.results[index].info = info;
              setStore({ characters: data });
            });
          })
          .catch((error) => console.log("Error en la solicitud de personajes"));
      },
      fetchVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles/")
          .then((response) => response.json())
          .then((data) => {
            return data;
          })
          .then(async (data) => {
            data.results.forEach(async (vehicle, index) => {
              // console.log(vehicle.url);
              const { url } = vehicle;

              const response = await fetch(url);
              const info = await response.json();
              data.results[index].info = info;
              setStore({ vehicles: data });
            });
          })
          .catch((error) => console.log("Error en la solicitud de vehiculos"));
      },
      fetchPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((response) => response.json())
          .then((data) => {
            return data;
          })
          .then(async (data) => {
            data.results.forEach(async (planet, index) => {
              // console.log(planet.url);
              const { url } = planet;
              const response = await fetch(url);
              const info = await response.json();
              data.results[index].info = info;
              setStore({ planets: data });
            });
          })
          .catch((error) => console.log("Error en la solicitud de planetas"));
      },
      addToFavorite: (fav) => {
        // console.log(getStore().favorite)
        // console.log(getStore().favorite)
        if (getStore().favorite.includes(fav)) {
          swal({
            title: "Ya se ha añadido a favoritos",
          });
        } else {
          setStore({
            favorite: getStore().favorite.concat(fav),
          });
          getActions().addTolocalStorage();
        }
      },
      deleteFromFavorite: (fav) => {
        setStore({
          favorite: getStore().favorite.filter((item) => item !== fav),
        });
        getActions().addTolocalStorage();
      },
      addTolocalStorage: () => {
        localStorage.setItem("lista", JSON.stringify(getStore().favorite));
      },
    },
  };
};

export default getState;
