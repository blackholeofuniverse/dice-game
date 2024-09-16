import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StartGame = ({ toggle }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <img src="images/dices.png" alt="dices" />
      </div>
      <div className="">
        <h1 className="text-8xl font-bold whitespace-nowrap uppercase">
          Dice Game
        </h1>
        <Button
          onClick={toggle}
          className="text-base border border-transparent hover:text-black hover:bg-white"
        >
          Play Now
        </Button>
        <Link to={"https://github.com/blackholeofuniverse"} target="_blank">
          <p className="right-4 bottom-4 text-right absolute cursor-pointer">
            Made by Samrat🤍
          </p>
        </Link>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 20px;
  height: 100vh;
`;

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
