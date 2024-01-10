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
          setScore((prevState) => ({
            ...prevState,
            playerScore: prevState.playerScore + 1,
          }));
        } else {
          setScore((prevState) => ({
            ...prevState,
            cpuScore: prevState.cpuScore + 1,
          }));
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

  return (
    <div className="m-auto flex min-h-screen max-w-[45.75rem] flex-col justify-between p-8">
      <Score />

      <div className="my-12 grid grid-cols-6 gap-4 md:mt-12 md:max-w-[42rem]">
        {gameMode === "easy"
          ? Object.keys(playerTypes)
              .slice(0, 3)
              .map((playerType) => (
                <Button
                  key={playerType}
                  playerType={playerType}
                  handlePlayerSelection={handlePlayerSelection}
                />
              ))
          : Object.keys(playerTypes).map((playerType) => (
              <Button
                key={playerType}
                playerType={playerType}
                handlePlayerSelection={handlePlayerSelection}
                className={
                  playerType === "spock" || playerType === "lizard"
                    ? "col-span-3"
                    : null
                }
              />
            ))}
      </div>

      <div className="grid grid-cols-2 grid-rows-2">
        <div className="flex flex-col items-center justify-start gap-2">
          {player ? (
            <span
              style={{ borderColor: playerTypes[player]?.firstColor }}
              className={`relative flex aspect-square w-36 items-center justify-center rounded-full border-[20px]  border-solid  bg-white`}
            >
              {playerTypes[player]?.svg}

              {winner === "user" && (
                <div className="absolute -z-50 flex items-center justify-center opacity-25">
                  <div className="absolute h-40 w-40 rounded-full bg-gray-300/55 shadow-2xl"></div>
                  <div className="absolute h-60 w-60 rounded-full bg-gray-300/45 shadow-2xl"></div>
                  <div className="absolute h-80 w-80 rounded-full bg-gray-300/35 shadow-2xl"></div>
                  <div className="h-100 w-100 absolute rounded-full bg-gray-300/25 shadow-2xl"></div>
                  <div className="h-120 w-120 absolute rounded-full bg-gray-300/15 shadow-2xl"></div>
                </div>
              )}
            </span>
          ) : (
            <span className="aspect-square w-36 rounded-full bg-radialSecond"></span>
          )}

          <span className="text-sm font-bold uppercase text-white">
            You picked
          </span>
        </div>

        <div
          className={`col-span-2 flex flex-col items-center justify-center gap-2 ${
            winner && "mb-8"
          }`}
        >
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
            disabled={!cpu && !player}
            onClick={() => handleResetButton()}
            className={`rounded-md bg-white px-16 py-4 text-base font-semibold uppercase tracking-[0.2em] ${
              !cpu && !player
                ? "disabled:opacity-50 hover:disabled:cursor-not-allowed"
                : null
            }`}
          >
            play again
          </button>
        </div>

        <div className="col-start-2 row-start-1 flex flex-col items-center justify-start gap-2">
          {cpu ? (
            <span
              style={{ borderColor: playerTypes[cpu]?.firstColor }}
              className={`relative flex aspect-square w-36 items-center justify-center rounded-full border-[20px] border-solid  bg-white `}
            >
              {playerTypes[cpu]?.svg}

              {winner === "cpu" && (
                <div className="absolute -z-50 flex items-center justify-center opacity-25">
                  <div className="absolute h-40 w-40 rounded-full bg-gray-300/55 shadow-2xl"></div>
                  <div className="absolute h-60 w-60 rounded-full bg-gray-300/45 shadow-2xl"></div>
                  <div className="absolute h-80 w-80 rounded-full bg-gray-300/35 shadow-2xl"></div>
                  <div className="h-100 w-100 absolute rounded-full bg-gray-300/25 shadow-2xl"></div>
                  <div className="h-120 w-120 absolute rounded-full bg-gray-300/15 shadow-2xl"></div>
                </div>
              )}
            </span>
          ) : (
            <span className="aspect-square w-36 rounded-full bg-radialSecond"></span>
          )}

          <span className="text-sm font-bold uppercase text-white">
            The house picked
          </span>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between">
        <button
          className="border-spacing-1 rounded-md border border-solid p-2 px-4 text-base font-semibold uppercase text-white md:px-10 md:text-xl"
          onClick={() => {
            setGameMode("easy");
            handleResetButton();
          }}
        >
          Easy
        </button>
        <button
          className="border-spacing-1 rounded-md border border-solid p-2 px-4 text-base font-semibold uppercase text-white md:px-10 md:text-xl"
          onClick={() => {
            setGameMode("hard");
            handleResetButton();
          }}
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
