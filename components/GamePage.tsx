"use client";

import React, { useContext, useEffect } from "react";

import { EasyMode, GameContext } from "@/contexts/GameContextProvider";

import { playerTypes } from "@/lib/gameInfo";
import { getRandomPlayerTypeCPU } from "@/helper_functions/getRandomPlayerTypeCPU";
import { checkWinner } from "@/helper_functions/checkWinner";

export default function GamePage() {
  const {
    gameMode,
    setGameMode,
    playerType,
    setPlayerType,
    cpuType,
    setCpuType,
    winner,
    setWinner,
  } = useContext(GameContext);

  useEffect(() => {
    const randomType = getRandomPlayerTypeCPU(playerType);
    setCpuType(randomType);

    setWinner(checkWinner(playerType, cpuType));
    // setTimeout(() => {}, 500);
  }, [playerType]);

  console.log("winner", winner);

  const handleResetButton = () => {
    setPlayerType("");
    setCpuType(null);
    setWinner(null);
  };

  return (
    <div className="flex flex-col gap-4">
      <button onClick={() => setGameMode("easy")}>Easy</button>
      <button onClick={() => setGameMode("hard")}>Difficult</button>

      {!playerType ? (
        <div>
          <button onClick={() => setPlayerType(EasyMode.paper)}>
            {playerTypes.paper.svg}
          </button>
          <button onClick={() => setPlayerType(EasyMode.scissors)}>
            {playerTypes.scissors.svg}
          </button>
          <button onClick={() => setPlayerType(EasyMode.rock)}>
            {playerTypes.rock.svg}
          </button>
        </div>
      ) : (
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col justify-start items-center gap-2">
            <span>You picked</span>
            <span>{playerTypes[playerType].svg}</span>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <span>{winner === "user" ? "YOU WIN" : "YOU LOSE"}</span>
            <button onClick={() => handleResetButton()}>play again</button>
          </div>

          <div className="flex flex-col justify-start items-center gap-2">
            <span>THE HOUSE PICKED</span>
            <span>{cpuType?.svg}</span>
          </div>
        </div>
      )}
    </div>
  );
}
