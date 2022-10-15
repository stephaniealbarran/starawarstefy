import React from "react";

export const Home = () => {
  return (
    <div className="carouselContainer container-fluid home">
      <div
        id="carouselExampleFade"
        className=" carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className=" carousel-inner">
          <div className="container-fluid carouselContent">
            <div className="carousel-item active">
              <img
                src="https://fondosmil.com/fondo/81725.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://fondosmil.com/fondo/78944.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/the-book-of-boba-fett-chapter-1-concept-art-01_a16792d8.jpeg?region=0%2C0%2C947%2C533"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
