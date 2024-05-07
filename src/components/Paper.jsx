import React from "react";
import paper from "../assets/icon-paper.svg";

const Paper = ({ handlePick }) => {
  return (
    <button
      onClick={handlePick ? () => handlePick("paper") : undefined}
      className="active:scale-110 rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-row justify-center items-center bg-gradient-to-b from-blue to-darkBlue"
    >
      <div className="bg-white rounded-full w-24 h-24 md:w-32 md:h-32  flex items-center justify-center">
        <img className="object-cover" src={paper} alt="" />
      </div>
    </button>
  );
};

export default Paper;
