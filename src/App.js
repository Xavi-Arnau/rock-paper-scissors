import { useEffect, useState } from "react";
import Game from "./components/Game";
import Rules from "./components/Rules";
import Score from "./components/Score";
import Result from "./components/Result";

function App() {
  const [showRules, setShowRules] = useState(false);
  const [pick, setPick] = useState(false);
  const [housePick, setHousePick] = useState(false);
  const [win, setWin] = useState(false);
  const [score, setScore] = useState(0);

  const rules = {
    rock: { scissors: true, paper: false },
    paper: { rock: true, scissors: false },
    scissors: { paper: true, rock: false },
  };
  const choices = ["rock", "paper", "scissors"];

  const getRandomPick = (userPick) => {
    let index = Math.floor(Math.random() * choices.length);
    let randomPick = choices[index];
    if (randomPick === userPick) {
      return getRandomPick(userPick);
    } else {
      return randomPick;
    }
  };

  const handlePick = (value) => {
    const randomValue = getRandomPick(value);
    console.log(randomValue);
    setPick(value);
    setHousePick(randomValue);
    if (rules[value][randomValue]) {
      //win
      setScore(score + 1);
      setWin(true);
      localStorage.setItem("storedScore", JSON.stringify(score + 1));
    } else {
      //lose
      setScore(score - 1);
      setWin(false);
      localStorage.setItem("storedScore", JSON.stringify(score - 1));
    }
  };
  const handleReset = () => {
    setPick(false);
    setHousePick(false);
  };

  useEffect(() => {
    let storedScore = JSON.parse(localStorage.getItem("storedScore"));
    if (storedScore) {
      setScore(storedScore);
    }
  }, [score]);

  return (
    <div className="w-full h-screen bg-gradient-radial from-green to-darkGreen">
      <Score score={score} />
      {!pick && <Game handlePick={handlePick} />}
      {pick && (
        <Result
          yourPick={pick}
          housePick={housePick}
          win={win}
          handleReset={handleReset}
        />
      )}

      {showRules && <Rules onClose={() => setShowRules(false)} />}
      <div className="flex flex-row md:absolute justify-center md:justify-end p-6 mt-10 md:mt-auto md:left-0 md:bottom-0 w-full">
        <button
          onClick={() => setShowRules(true)}
          className="text-white text-sm py-2 px-8 border-2 border-headerOutline rounded-lg uppercase tracking-widest active:scale-110"
        >
          Rules
        </button>
      </div>
    </div>
  );
}

export default App;
