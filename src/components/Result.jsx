import React from "react";
import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";

const Result = ({ yourPick, housePick, handleReset, win }) => {
  let yourPickDisplay;
  let housePickDisplay;
  if (yourPick === "rock") {
    yourPickDisplay = <Rock />;
  } else if (yourPick === "paper") {
    yourPickDisplay = <Paper />;
  } else {
    yourPickDisplay = <Scissors />;
  }
  switch (housePick) {
    case "rock":
      housePickDisplay = <Rock />;
      break;
    case "paper":
      housePickDisplay = <Paper />;
      break;
    default:
      housePickDisplay = <Scissors />;
  }
  return (
    <div>
      <div className="mx-auto p-4 md:w-2/5 flex flex-row justify-between">
        <div className="flex flex-col gap-12 items-center w-1/2 md:w-auto">
          <div className="text-white uppercase text-xl font-bold">
            You picked
          </div>
          <div>{yourPickDisplay}</div>
        </div>
        <div className="hidden md:flex flex-col gap-4 items-center justify-center">
          <div className="text-3xl text-white uppercase font-bold">
            {win ? "You win" : "You lose"}
          </div>
          <button
            onClick={handleReset}
            className="bg-white text-amber-600 py-2 px-12 rounded-lg uppercase text-base font-bold active:scale-110"
          >
            Play again
          </button>
        </div>
        <div className="flex flex-col gap-12 items-center  w-1/2 md:w-auto">
          <div className="text-white uppercase text-xl font-bold">
            The house picked
          </div>
          <div>{housePickDisplay}</div>
        </div>
      </div>
      <div className="flex md:hidden flex-col gap-4 items-center justify-center">
        <div className="text-3xl text-white uppercase font-bold">
          {win ? "You win" : "You lose"}
        </div>
        <button
          onClick={handleReset}
          className="bg-white text-amber-600 py-2 px-12 rounded-lg uppercase text-base font-bold active:scale-110"
        >
          Play again
        </button>
      </div>
    </div>
  );
};

export default Result;
