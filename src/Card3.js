import React from "react";
import komplet1 from "./images/komplet1.jpg";
import komplet2 from "./images/komplet2.jpg";
import komplet3 from "./images/komplet3.jpg";
import komplet4 from "./images/komplet4.jpg";
import komplet5 from "./images/komplet5.jpg";
import komplet6 from "./images/komplet6.jpg";
import komplet7 from "./images/komplet7.jpg";
import komplet8 from "./images/komplet8.jpg";
import komplet9 from "./images/komplet9.jpg";

function Card3() {
  return (
    <div className="container-fluid">
      <h2 className="text-center mt-5">
        <span className="bg-dark text-light rounded rounded-3 p-2">
          Komplete
        </span>
      </h2>
      <div className="card-group mt-5 container-md">
        <div className="card border border-1 border-dark">
          <img
            className="card-img-top mt-5"
            src={komplet1}
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title mt-3">QMIMI: 130 &euro;</h5>
          </div>
        </div>
        <div className="card  border mx-5 border-1 border-dark">
          <img
            className="card-img-top mt-5 "
            src={komplet2}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title text-center mt-3">QMIMI: 190 &euro;</h5>
          </div>
        </div>
        <div className="card  border border-1 border-dark">
          <img
            className="card-img-top mt-5"
            src={komplet3}
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title mt-3">QMIMI: 230 &euro;</h5>
          </div>
        </div>
      </div>
      {/* Card groupi i dyte */}
      <div className="card-group my-5 container-md">
        <div className="card border border-1 border-dark">
          <img
            className="card-img-top mt-4"
            src={komplet4}
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title">QMIMI: 185 &euro;</h5>
          </div>
        </div>
        <div className="card  border mx-5 border-1 border-dark">
          <img
            className="card-img-top mt-4"
            src={komplet5}
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title">QMIMI: 165 &euro;</h5>
          </div>
        </div>
        <div className="card  border border-1 border-dark ">
          <img
            className="card-img-top mt-4 px-2"
            src={komplet6}
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title mt-2">QMIMI: 265 &euro;</h5>
          </div>
        </div>
      </div>
      {/* Card groupi i trete */}
      <div className="card-group container-md ">
        <div className="card border border-1 border-dark">
          <img
            className="card-img-top mt-4"
            src={komplet7}
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title">QMIMI: 175 &euro;</h5>
          </div>
        </div>
        <div className="card  border mx-5 border-1 border-dark">
          <img
            className="card-img-top mt-4"
            src={komplet8}
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title">QMIMI: 195 &euro;</h5>
          </div>
        </div>
        <div className="card  border border-1 border-dark ">
          <img
            className="card-img-top mt-4 px-2"
            src={komplet9}
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title mt-2">QMIMI: 285 &euro;</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;
