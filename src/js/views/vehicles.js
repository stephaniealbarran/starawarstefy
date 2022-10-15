import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import FormatoCardVehicles from "../FormatoCardVehicles";

export const Vehicles = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchVehicles();
  }, []);
  return (
    <div className="fondoCuerpo container-fluid row">
      {store.vehicles.results?.length > 0 ? (
        store.vehicles.results.map((vehicle, index) => {
          return (
            <FormatoCardVehicles
              key={index}
              name={vehicle.name}
              index={vehicle.uid}
              info={vehicle?.info?.result?.properties}
              favorite={vehicle}
              img={"https://i.blogs.es/e8942b/millennium-falcon/450_1000.jpg"}
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
