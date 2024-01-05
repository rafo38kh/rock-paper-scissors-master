"use client";
import Image from "next/image";
import React, { useContext, useEffect } from "react";

import { GameContext } from "@/contexts/GameContextProvider";

import { playerTypes } from "@/lib/gameInfo";
import { getRandomPlayerTypeCPU } from "@/helper_functions/getRandomPlayerTypeCPU";
import { checkWinner } from "@/helper_functions/checkWinner";
import Modal from "./Modal";

import easyIcon from "@/public/images/logo.svg";
import hardIcon from "@/public/images/logo-bonus.svg";

export default function GamePage() {
  const {
    gameMode,
    setGameMode,
    player,
    setPlayer,
    cpu,
    setCpu,
    winner,
    setWinner,
    isModalOpend,
    setIsModalOpend,
    score,
    setScore,
  } = useContext(GameContext);

  useEffect(() => {
    setCpu(getRandomPlayerTypeCPU(player));
    const winner = checkWinner(player, cpu);
    if (winner !== null) setWinner(winner);
    console.log("winner", winner);
  }, [player]);

  useEffect(() => {
    if (winner === "user") {
      setScore((prevState) => prevState + 1);
    }
  }, [winner]);

  console.log(winner);

  const handleResetButton = () => {
    setCpu("");
    setPlayer("");
    setWinner(null);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center p-6 rounded-md border">
        {gameMode === "easy" ? (
          <Image src={easyIcon} alt="Icon" height={40} width={40} />
        ) : (
          <Image src={hardIcon} alt="Icon" height={40} width={40} />
        )}

        <div className="flex flex-col justify-center items-center  p-2 bg-red-600 rounded-md">
          <span>Score</span>
          <span>{score}</span>
        </div>
      </div>

      <div>
        <button onClick={() => setGameMode("easy")}>Easy</button>
        <button onClick={() => setGameMode("hard")}>Difficult</button>
      </div>

      {!player ? (
        <div>
          {gameMode === "easy" ? (
            <div>
              <button onClick={() => setPlayer("paper")}>
                {playerTypes.paper.svg}
              </button>
              <button onClick={() => setPlayer("scissors")}>
                {playerTypes.scissors.svg}
              </button>
              <button onClick={() => setPlayer("rock")}>
                {playerTypes.rock.svg}
              </button>
            </div>
          ) : gameMode === "hard" ? (
            <div>
              <button onClick={() => setPlayer("paper")}>
                {playerTypes.paper.svg}
              </button>
              <button onClick={() => setPlayer("scissors")}>
                {playerTypes.scissors.svg}
              </button>
              <button onClick={() => setPlayer("rock")}>
                {playerTypes.rock.svg}
              </button>
              <button onClick={() => setPlayer("spock")}>
                {playerTypes.spock.svg}
              </button>
              <button onClick={() => setPlayer("lizard")}>
                {playerTypes.lizard.svg}
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col justify-start items-center gap-2">
            <span>You picked</span>
            {playerTypes[player]?.svg}
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            {winner && winner === "user" && <span>you win</span>}
            {winner && winner === "cpu" && <span>you lose</span>}
            <button onClick={() => handleResetButton()}>play again</button>
          </div>

          <div className="flex flex-col justify-start items-center gap-2">
            <span>THE HOUSE PICKED</span>
            {playerTypes[cpu]?.svg}
          </div>
        </div>
      )}
      <button onClick={() => setIsModalOpend(true)}>Rules</button>
      {isModalOpend && <Modal />}
    </div>
  );
}
