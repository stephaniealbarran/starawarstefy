import React, { useEffect, useContext } from "react";
import FormatoCardCharacters from "../FormatoCardCharacters";
import { Context } from "../store/appContext";

// import { Pagination } from "../component/Pagination";
export const Characters = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchCharacters();
  }, []);
  return (
    <div className="fondoCuerpo container-fluid row">
      {store.characters.results?.length > 0 ? (
        store.characters.results.map((character, index) => {
          return (
            <FormatoCardCharacters
              key={index}
              name={character.name}
              index={index}
              info={character?.info?.results?.properties}
              favorite={character}
              img={
                "https://p4.wallpaperbetter.com/wallpaper/81/410/454/star-wars-r2d2-video-games-star-wars-hd-art-wallpaper-preview.jpg"
              }
            />
          );
        })
      ) : (
        <div className="spinner-border text-warning mx-auto my-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};
