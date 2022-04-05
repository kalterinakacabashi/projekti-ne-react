import React from "react";
import kpuca1 from "./images/kpuca1.jpg";
import kpuca2 from "./images/kpuca2.jpg";
import kpuca3 from "./images/kpuca3.jpg";
import kpuca4 from "./images/kpuca4.jpg";
import kpuca5 from "./images/kpuca5.jpg";
import kpuca6 from "./images/kpuca6.jpg";
import kpuca7 from "./images/kpuca7.jpg";
import kpuca8 from "./images/kpuca8.jpg";
import kpuca9 from "./images/kpuca9.jpg";

function Card2() {
  return (
    <div className="container-fluid">
      <h2 className="text-center mt-5">
        <span className="bg-dark text-light rounded rounded-3 p-2">
          KËPUCAT
        </span>
      </h2>
      <div className="card-group container-md my-5">
        <div className="card border border-1 border-dark">
          <img className="card-img-top" src={kpuca1} alt="Card image cap" />
          <div className="card-body text-center ">
            <h5 className="card-title">QMIMI: 110 &euro;</h5>
          </div>
        </div>
        <div className="card  border mx-5 border-1 border-dark">
          <img
            className="card-img-top mt-5 "
            src={kpuca2}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title text-center mt-5">QMIMI: 80 &euro;</h5>
          </div>
        </div>
        <div className="card  border border-1 border-dark">
          <img
            className="card-img-top mt-5"
            src={kpuca3}
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title mt-5">QMIMI: 75 &euro;</h5>
          </div>
        </div>
      </div>
      {/* Card groupi i dyte */}
      <div className="card-group container-md   ">
        <div className="card border border-1 border-dark">
          <img
            className="card-img-top mt-4"
            src={kpuca4}
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title">QMIMI: 65 &euro;</h5>
          </div>
        </div>
        <div className="card  border mx-5 border-1 border-dark">
          <img
            className="card-img-top mt-4"
            src={kpuca5}
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title">QMIMI: 80 &euro;</h5>
          </div>
        </div>
        <div className="card  border border-1 border-dark ">
          <img
            className="card-img-top mt-4 px-2"
            src={kpuca6}
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title">QMIMI: 90 &euro;</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
