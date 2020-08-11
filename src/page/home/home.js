import React, { Component } from "react";
import Trangkhoahoc from "./trangkhoahoc";

export default class home extends Component {
  render() {
    return (
      <div>
        <section className="Slide">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="./assets/img/slide_1.jpg"  height="500px" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./assets/img/slide_2.jpg" height="500px" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./assets/img/slide_3.jpg"  height="500px" />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
        <Trangkhoahoc />
      </div>
    );
  }
}
