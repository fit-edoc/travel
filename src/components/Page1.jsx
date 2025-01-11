import React, { useState } from "react";

import { RiPinDistanceFill } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import "./page1.css";

import { Link } from "react-router-dom";

function Page1({data}) {
 



  // const data = [
  //   {
  //     id: 1,
  //     src: "/images/swift.png",
  //     model: "SWIFT DEZIRE (SEDAN)",
  //     seat: "4 seater",
  //     km: "12Rs/km",
  //   },
  //   {
  //     id: 2,
  //     src: "/images/innova.png",
  //     model: "INNOVA",
  //     seat: "7 seater",
  //     km: "16Rs/km",
  //   },
  //   {
  //     id: 3,
  //     model: "ETIOS",
  //     src: "/images/etios.png",
  //     seat: "4 seater",
  //     km: "12Rs/km",
  //   },
  //   {
  //     id: 4,
  //     model: "ERTIGA",
  //     src: "/images/ertica.png",
  //     seat: "7 seater",
  //     km: "14Rs/km",
  //   },
  //   {
  //     id: 5,
  //     src: "/images/cry.png",
  //     model: "INNOVA CRYSTA (MUV)",
  //     seat: "7 seater",
  //     km: "20Rs/km",
  //   },
  //   {
  //     id: 6,
  //     src: "/images/temp.png",
  //     model: "TEMPO TRAVELLER",
  //     seat: "15 seater",
  //     km: "26Rs/km",
  //   },
  // ];

  

  return (
    <div className="page1">
      <div className="head">
        <h2>Our cab sevrice</h2>
      </div>
      <div className="uppercard">
        {data.map((item, index) => {
          return (
            <>
              <a>
                <div className="card" key={index}>
                  <div className="view">
                    <img src={item.src} alt="" />
                  </div>
                  <div className="detail">
                    <h4>{item.model}</h4>
                  </div>
                  <div className="book">
                    <div className="r">
                      <IoPersonOutline /> <h4>{item.seat}</h4>
                    </div>
                    <div className="l">
                      {" "}
                      <RiPinDistanceFill className="d" /> <h4>{item.km}</h4>
                      <Link to={`/card/${item.id}`}>
                        {" "}
                        <button>
                          book now
                        </button>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </a>
            </>
          );
        })}

      
      </div>
    </div>
  );
}

export default Page1;
