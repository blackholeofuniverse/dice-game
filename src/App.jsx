import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";
import { useState } from "react";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameplay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
    {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGameplay} />}
    </>
  );
};

export default App;
