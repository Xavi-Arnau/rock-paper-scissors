import React from "react";

const Score = ({ score }) => {
  return (
    <div className="p-8">
      <div className="border-2 border-headerOutline rounded-xl mx-auto md:w-2/4 flex flex-row justify-between text-white p-2 md:p-4 items-center">
        <div className="uppercase text-2xl md:text-4xl font-bold leading-5 md:leading-7 flex flex-col">
          <div>Rock</div>
          <div>Paper</div>
          <div>Scissors</div>
        </div>
        <div className="bg-white text-slate-600 uppercase flex flex-col items-center py-2 px-4 md:px-8 rounded-lg">
          <div className="text-base font-bold tracking-wider">Score</div>
          <div className="text-3xl md:text-5xl font-bold">{score}</div>
        </div>
      </div>
    </div>
  );
};

export default Score;
