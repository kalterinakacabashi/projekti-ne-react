import React from "react";
import kmisha1 from "./images/kmishadhekustume1.jpg";
import kmisha2 from "./images/kmishadhekustume2.jpg";
import kmisha3 from "./images/kmishadhekustume3.jpg";
import kmisha4 from "./images/kmishadhekustume4.jpg";
import kmisha5 from "./images/kmishadhekustume5.jpg";
import kmisha6 from "./images/kmishadhekustume6.jpg";

function Card1() {
  return (
    <div className="container-fluid">
      <h2 className="text-center mt-5">
        <span className="bg-dark text-light rounded rounded-3 p-2">
          KËMISHAT DHE KOSTUMET{" "}
        </span>
      </h2>
      <div className="card-group container-md mt-5">
        <div className="card border border-1 border-dark">
          <img
            className="card-img-top mt-5"
            src={kmisha1}
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title">QMIMI: 170 &euro;</h5>
          </div>
        </div>
        <div className="card  border mx-5 border-1 border-dark">
          <img
            className="card-img-top mt-5 "
            src={kmisha2}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title text-center">QMIMI: 180 &euro;</h5>
          </div>
        </div>
        <div className="card  border border-1 border-dark">
          <img className="card-img-top" src={kmisha3} alt="Card image cap" />
          <div className="card-body text-center">
            <h5 className="card-title">QMIMI: 185 &euro;</h5>
          </div>
        </div>
      </div>
      {/* Card groupi i dyte */}
      <div className="card-group container-md mt-5">
        <div className="card border border-1 border-dark">
          <img className="card-img-top" src={kmisha4} alt="Card image cap" />
          <div className="card-body text-center">
            <h5 className="card-title">QMIMI: 125 &euro;</h5>
          </div>
        </div>
        <div className="card  border mx-5 border-1 border-dark">
          <img
            className="card-img-top mt-5"
            src={kmisha5}
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title">QMIMI: 130 &euro;</h5>
          </div>
        </div>
        <div className="card  border border-1 border-dark ">
          <img
            className="card-img-top mt-5 px-2"
            src={kmisha6}
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title">QMIMI: 100 &euro;</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
