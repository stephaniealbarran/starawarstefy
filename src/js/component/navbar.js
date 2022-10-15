import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { TiDelete } from "react-icons/ti";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="sticky-top">
        <nav className="navBar1 navbar navbar-expand-lg navbar-light bg-light ">
          <div className="container-fluid ">
            <div className="col-1"></div>
            <Link className="col-10 text-center" to="/">
              <img
                className="logoNavBar"
                src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
              />
            </Link>
            <div
              className="collapse navbar-collapse col-1 "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item btn-group dropstart">
                  <a
                    className="nav-link dropdown-toggle btn-warning"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {store.favorite.length}
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    {store.favorite.map((favorite, index) => (
                      <li className="dropdown-item bg-dark" key={index} href={favorite.url} >
                        <a className="ms-2 d-flex justify-content-between">
                          {favorite}
                          <button
                            type="button"
                            className="btn btn-outline-danger border border-0 rounded-circle"
                            onClick={() =>
                              actions.deleteFromFavorite(favorite)
                            }
                          >
                            {" "}
                            <TiDelete />
                          </button>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Segundo NAV */}
        <nav className="navBar2 navbar navbar-dark bg-dark ">
          <div className="container-fluid  d-flex justify-content-center">
            <li className="me-3 nav-item  ">
              <Link className="linkToView" to="/characters">
                Characters
              </Link>
            </li>
            <li className="me-3 nav-item ">
              <Link className="linkToView" to="/planets">
                Planets
              </Link>
            </li>
            <li className="me-3 nav-item ">
              <Link className="linkToView" to="/vehicles">
                Vehicles
              </Link>
            </li>
          </div>
        </nav>
      </div>
    </>
  );
};
