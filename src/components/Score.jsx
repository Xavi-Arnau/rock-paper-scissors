import React from "react";

const Score = ({ score }) => {
  return (
    <div className="p-8">
      <div className="border-2 border-headerOutline rounded-xl mx-auto w-2/4 flex flex-row justify-between text-white p-4 items-center">
        <div className="uppercase text-4xl font-bold leading-7 flex flex-col">
          <div>Rock</div>
          <div>Paper</div>
          <div>Scissors</div>
        </div>
        <div className="bg-white text-slate-600 uppercase flex flex-col items-center py-2 px-8 rounded-lg">
          <div className="text-lg font-bold tracking-wider">Score</div>
          <div className="text-5xl font-bold">{score}</div>
        </div>
      </div>
    </div>
  );
};

export default Score;
