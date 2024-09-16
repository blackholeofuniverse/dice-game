import styled from "styled-components";
import { Link } from "react-router-dom";

const RollDice = ({
  currentDice,
  setCurrentDice,
  onClick,
  toggleRules,
  showRules,
  setScore,
  setSelectedNumber,
  selectedNumber,
  setError,
}) => {
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(() => randomNumber);
    setSelectedNumber(undefined);
  };

  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex items-center flex-col gap-4" onClick={rollDice}>
        <div className="cursor-pointer">
          <img
            src={`/images/dice_${currentDice}.png`}
            alt="dice"
            onClick={onClick}
          />
        </div>
        <p className="text-2xl font-medium">Click on Dice to roll</p>
      </div>
      <div className="flex flex-col gap-5">
        <ButtonReset
          onClick={() => setScore(0)}
          className="text-base border border-black text-black hover:text-white hover:bg-black"
        >
          Reset Score
        </ButtonReset>
        <Button
          onClick={toggleRules}
          className="text-base border-2 border-transparent hover:text-black hover:bg-white"
        >
          {showRules ? "Hide Rules" : "Show Rules"}
        </Button>
      </div>
      <Link to={"https://github.com/blackholeofuniverse"} target="_blank">
        <p className="right-4 bottom-4 text-right  fixed cursor-pointer">
          Made by Samrat🤍
        </p>
      </Link>
    </div>
  );
};

export default RollDice;

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  min-width: 220px;
  height: 44px;
  background-color: #000000;
  border-radius: 5px;
  border: none;
  transition: all ease 0.2s;

  &:hover {
    border: 1px solid black;
  }
`;

const ButtonReset = styled.button`
  padding: 10px 18px;
  min-width: 220px;
  height: 44px;
  border-radius: 5px;
  transition: all ease 0.2s;
`;
