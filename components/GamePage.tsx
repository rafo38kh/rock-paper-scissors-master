"use client";
import { useContext, useEffect } from "react";

import { GameContext } from "@/contexts/GameContextProvider";

import { checkWinner } from "@/helper_functions/checkWinner";
import { getRandomPlayerTypeCPU } from "@/helper_functions/getRandomPlayerTypeCPU";

import Modal from "./Modal";
import Score from "./Score";

import { playerTypes } from "@/lib/gameInfo";
import Button from "./Button";

export default function GamePage() {
  const {
    cpu,
    player,
    setCpu,
    winner,
    gameMode,
    setScore,
    setPlayer,
    setWinner,
    setGameMode,
    isModalOpend,
    setIsModalOpend,
  } = useContext(GameContext);

  useEffect(() => {
    if (player) {
      setTimeout(() => {
        const cpuType = getRandomPlayerTypeCPU(player, gameMode);

        const winner = checkWinner(player, cpuType);

        if (winner === "user") {
          setScore((prevState) => prevState + 1);
        }

        setCpu(cpuType);
        setWinner(winner);
      }, 1000);
    }
  }, [player]);

  const handlePlayerSelection = (player: string) => {
    setPlayer(player);
  };

  const handleResetButton = () => {
    setCpu("");
    setPlayer("");
    setWinner(null);
  };

  console.log("object info", playerTypes[player]?.firstColor);

  return (
    <div className="m-auto flex h-screen max-w-[43.75rem] flex-col justify-between p-8">
      <Score />

      {!player ? (
        <div>
          {gameMode === "easy" ? (
            <div className="m-auto grid max-w-96 grid-cols-2 grid-rows-2 place-items-center gap-3 md:max-w-[30rem]">
              {Object.keys(playerTypes)
                .slice(0, 3)
                .map((playerType) => (
                  <Button
                    key={playerType}
                    playerType={playerType}
                    handlePlayerSelection={handlePlayerSelection}
                    className={playerType === "rock" ? "col-span-2" : null}
                  />
                ))}
            </div>
          ) : gameMode === "hard" ? (
            <div className="m-auto  grid max-w-96 grid-cols-2 grid-rows-3 place-items-center gap-8 md:max-w-[30rem]">
              {Object.keys(playerTypes).map((playerType) => (
                <Button
                  key={playerType}
                  playerType={playerType}
                  handlePlayerSelection={handlePlayerSelection}
                  className={`${
                    playerType === "paper"
                      ? "col-span-2 justify-self-center"
                      : null
                  } ${
                    playerType === "scissors" || playerType === "lizard"
                      ? "justify-self-start"
                      : "justify-self-end"
                  }`}
                />
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="flex flex-col items-center justify-start gap-2">
            <span
              className={`flex aspect-square items-center justify-center rounded-full border-[20px] border-solid  bg-white border-[${playerTypes[player]?.firstColor}] w-36`}
            >
              {playerTypes[player]?.svg}
            </span>
            <span className="text-sm font-bold uppercase text-white">
              You picked
            </span>
          </div>

          <div className="col-span-2 flex flex-col items-center justify-center gap-2">
            {winner && winner === "user" && (
              <span className="text-[56px] font-bold uppercase text-white">
                you win
              </span>
            )}
            {winner && winner === "cpu" && (
              <span className="text-[56px] font-bold  uppercase text-white">
                you lose
              </span>
            )}
            <button
              className="rounded-md bg-white px-16 py-4 text-base font-semibold uppercase tracking-[0.2em]"
              onClick={() => handleResetButton()}
            >
              play again
            </button>
          </div>

          <div className="col-start-2 row-start-1 flex flex-col items-center justify-start gap-2">
            <span
              className={`flex aspect-square w-36 items-center justify-center rounded-full border-[20px] border-solid  bg-white border-[${playerTypes[cpu]?.firstColor}]`}
            >
              {playerTypes[cpu]?.svg}
            </span>
            <span className="text-sm font-bold uppercase text-white">
              The house picked
            </span>
          </div>
        </div>
      )}
      <div className="flex flex-row items-center justify-between">
        <button
          className="border-spacing-1 rounded-md border border-solid p-2 px-4 text-base font-semibold uppercase text-white md:px-10 md:text-xl"
          onClick={() => setGameMode("easy")}
        >
          Easy
        </button>
        <button
          className="border-spacing-1 rounded-md border border-solid p-2 px-4 text-base font-semibold uppercase text-white md:px-10 md:text-xl"
          onClick={() => setGameMode("hard")}
        >
          Hard
        </button>
        <button
          className="border-spacing-1 rounded-md border border-solid p-2 px-4 text-base font-semibold uppercase text-white md:px-10 md:text-xl"
          onClick={() => setIsModalOpend(true)}
        >
          Rules
        </button>
      </div>
      {isModalOpend && <Modal />}
    </div>
  );
}
