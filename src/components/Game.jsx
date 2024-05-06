import React from "react";
import board from "../assets/bg-triangle.svg";

import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";

const Game = ({ handlePick }) => {
  return (
    <div className="mt-12">
      <div
        className="mx-auto w-1/5 h-full bg-cover bg-no-repeat flex flex-col"
        style={{ backgroundImage: `url(${board})` }}
      >
        <div className="flex flex-row justify-between">
          <div className="-mt-10 -ml-5">
            <Paper handlePick={handlePick} />
          </div>
          <div className="-mt-10 -mr-5">
            <Scissors handlePick={handlePick} />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mt-10">
            <Rock handlePick={handlePick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
