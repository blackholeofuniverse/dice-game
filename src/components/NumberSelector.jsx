import { useState } from "react";

const NumberSelector = ({ selectedNumber, setSelectedNumber, error, setError }) => {
  const choices = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (choice) => {
    setSelectedNumber(choice);
    setError("");
  }

  return (
    <div className="">
      <p className="text-xl text-red-500 text-right mb-1">{error}</p>
      <div className="flex gap-6">
        {choices.map((choice) => {
          const isSelected = `${
            choice === selectedNumber
              ? "bg-black text-white"
              : "border-2 border-black"
          }`;

          return (
            <div
              key={choice}
              onClick={() => numberSelectorHandler(choice)}
              className={`w-16 h-16 ${isSelected} text-2xl cursor-pointer  text-black grid place-items-center font-semibold`}
              >
              {choice}
            </div>
              
          );
        })}
      </div>
      <p className="font-semibold text-right text-2xl mt-2">Select Number</p>
    </div>
  );
};

export default NumberSelector;

//
