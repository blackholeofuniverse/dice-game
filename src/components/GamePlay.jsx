import NumberSelector from "./NumberSelector";
import { useState } from "react";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState("");
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false)
  const [error, setError] = useState("")

  const getScore = () => {
    if(!selectedNumber) return;
    if (selectedNumber === currentDice) {
      setScore((prev) => prev + selectedNumber);

    } else {
      setScore((prev) => prev - 1);
    }
  };

  const toggleRules = () => {
    setShowRules((prev) => !prev)
  }

  return (
    <main>
      <div className="flex items-center justify-between p-8">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <div className="flex flex-col items-center gap-10">
        <RollDice
          onClick={getScore}
          currentDice={currentDice}
          setCurrentDice={setCurrentDice}
          toggleRules={toggleRules}
          showRules={showRules}
          setScore={setScore}
          setSelectedNumber={setSelectedNumber}
          selectedNumber={selectedNumber}
          setError={setError}
        />
        <Rules showRules={showRules} />
      </div>
    </main>
  );
};

export default GamePlay;
