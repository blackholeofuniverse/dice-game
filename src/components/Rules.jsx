import React from "react";
import styled from "styled-components";

const Rules = ({ showRules }) => {
  const rules = `${showRules ? "flex flex-col justify-center" : "hidden"}`;

  return (
    <div>
      <Container
        className={`${rules} w-[794px] h-[208px] p-5 flex flex-col justify-center mb-10`}
      >
        <h1 className="font-bold leading-9 text-xl mb-6">
          How to play Dice Game
        </h1>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p className="text-nowrap">
          After click on dice if selected number is equal to dice number you
          will get same points as dice{" "}
        </p>
        <p>If you get wrong guess then 1 point will be deducted</p>
      </Container>
    </div>
  );
};

export default Rules;

const Container = styled.div`
  background: #fbf1f1;
`;
