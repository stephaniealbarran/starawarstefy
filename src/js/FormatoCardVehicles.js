import React, { useContext } from "react";
import { MdFavorite } from "react-icons/md";
import { Context } from "./store/appContext";

const FormatoCardVehicles = ({ index, img, name, info, favorite }) => {
  const { store, actions } = useContext(Context);

  return (
    <div key={index} className="row rounded">
      <div className="col-sm-12 col-md-6 col-lg-3 g-4">
        <div className="card bg-dark bg-gradient rounded text-light">
          <img src={img} />
          <div className="card-body border-top border-4 border-secondary p-0 ">
            <h4 className="p-1 text-center" id="bodycard">
              {name}
              <button
                type="button"
                className="btn btn-outline-danger border border-0 rounded-circle float-end"
              >
                <MdFavorite onClick={() => actions.addToFavorite(favorite.name)} />
              </button>
            </h4>
            <p className="card-text p-1 fs-4" id="bodytext">
              {/* La linea de abajo se lee como: Si INFO es distinto de undefined y null */}
              {/* Después del && dice que si info EXISTE entonces llama a info.climate */}
              {/* El operardor ? se llama chaining operator  */}
              Model: {!!info && info?.model}.
            </p>
            <p className="card-text p-1 fs-4" id="bodytext">
              Class: {!!info && info?.vehicle_class} people.
            </p>
            <p className="card-text p-1 fs-4" id="bodytext">
              Manufacturer: {!!info && info?.manufacturer}.
            </p>
            <p className="card-text p-1 fs-4" id="bodytext">
              Cost in credits: {!!info && info?.cost_in_credits} days.
            </p>
            <p className="card-text p-1 fs-4" id="bodytext">
              Length: {!!info && info?.length} days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormatoCardVehicles;
