import React from "react";
import scissors from "../assets/icon-scissors.svg";

const Scissors = ({ handlePick }) => {
  return (
    <button
      onClick={handlePick ? () => handlePick("scissors") : undefined}
      className="active:scale-110 rounded-full w-40 h-40 flex flex-row justify-center items-center bg-gradient-to-b from-orange to-darkOrange"
    >
      <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center">
        <img className="object-cover" src={scissors} alt="" />
      </div>
    </button>
  );
};

export default Scissors;
