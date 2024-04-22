import React from "react";
import "./BotonStart.css";
export default function BotonStart({ fnStart, fnCheckWinner, fnWinning }) {
  const changeState = () => {
    fnStart(true);
    if (fnWinning) {
      fnCheckWinner(false);
    }
  };

  return (
    <div>
      <button className="traga-perras-button" onClick={changeState}>
        ¡EMPIEZA A JUGAR!
      </button>
    </div>
  );
}
