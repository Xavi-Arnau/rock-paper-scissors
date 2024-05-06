import React from "react";
import rock from "../assets/icon-rock.svg";

const Rock = ({ handlePick }) => {
  return (
    <button
      onClick={handlePick ? () => handlePick("rock") : undefined}
      className="active:scale-110 rounded-full w-40 h-40 flex flex-row justify-center items-center bg-gradient-to-b from-red to-darkRed "
    >
      <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center">
        <img className="object-cover" src={rock} alt="" />
      </div>
    </button>
  );
};

export default Rock;
