import React, { useEffect } from "react";
import pato from "../../assets/pato.png";
import bm from "../../assets/hongo.png";
import hongo from "../../assets/bm.png";
import patricio from "../../assets/patricio.png";
import "./reset.css";
import "./tragaperras.css";
import { useState } from "react";
import BotonStart from "../BotonStart/BotonStart";
export default function Tragaperras({ fnWinner, isWinners }) {
  const getIndex = (arr) => {
    // console.log(Math.floor(Math.random() * arr.length));
    return Math.floor(Math.random() * arr.length);
  };
  const pictures1 = [pato, bm, hongo, patricio];

  const [currentPictures, setCurrentPictures] = useState([
    pictures1[getIndex(pictures1)],
    pictures1[getIndex(pictures1)],
    pictures1[getIndex(pictures1)],
    pictures1[getIndex(pictures1)],
  ]);

  const [isPlaying, setIsPlaying] = useState(false);
  let carril1 = [
    currentPictures[getIndex(currentPictures)],
    currentPictures[getIndex(currentPictures)],
    currentPictures[getIndex(currentPictures)],
    currentPictures[getIndex(currentPictures)],
  ];
  let carril2 = [
    currentPictures[getIndex(currentPictures)],
    currentPictures[getIndex(currentPictures)],
    currentPictures[getIndex(currentPictures)],
    currentPictures[getIndex(currentPictures)],
  ];
  let carril3 = [
    currentPictures[getIndex(currentPictures)],
    currentPictures[getIndex(currentPictures)],
    currentPictures[getIndex(currentPictures)],
    currentPictures[getIndex(currentPictures)],
  ];

  const changing = () => {
    const interval = setInterval(() => {
      setCurrentPictures([
        pictures1[getIndex(pictures1)],
        pictures1[getIndex(pictures1)],
        pictures1[getIndex(pictures1)],
        pictures1[getIndex(pictures1)],
      ]);
    }, 400);

    setTimeout(() => {
      clearInterval(interval);
      setIsPlaying(false);
    }, 3000);
  };

  useEffect(() => {
    if (isPlaying === true) {
      changing();
    } else if (isPlaying === false) {
      checkWinner();
    }
  }, [isPlaying]);

  const checkWinner = () => {
    if (carril1[2] === carril2[2] && carril2[2] === carril3[2]) {
      fnWinner(true);
      console.log("hola");
    }
  };
  return (
    <>
      <div className="container">
        <div className="card-container">
          <div className="card">
            {carril1.map((element, i) => (
              <img key={`${i}`} className={`${i}`} src={`${element}`} />
            ))}
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            {carril2.map((element, i) => (
              <img key={`${i}`} className={`${i}`} src={`${element}`} />
            ))}
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            {carril3.map((element, i) => (
              <img key={`${i}`} className={`${i}`} src={`${element}`} />
            ))}
          </div>
        </div>
      </div>
      <BotonStart
        fnStart={setIsPlaying}
        fnCheckWinner={fnWinner}
        fnWinning={isWinners}
      />
    </>
  );
}
