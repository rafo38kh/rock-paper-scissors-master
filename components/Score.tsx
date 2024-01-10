import React, { useContext } from "react";

import { GameContext } from "@/contexts/GameContextProvider";

import Word from "./Word";

export default function Score() {
  const { gameMode, score } = useContext(GameContext);

  return (
    <div className="flex h-full w-full flex-col justify-between gap-4 rounded-md border-[3px] border-solid border-headerOutline p-3 md:flex-row">
      <div className="flex w-full flex-col items-center justify-center rounded-md bg-white px-6 py-3 md:px-12">
        <span className="text-lg font-semibold uppercase tracking-widest text-scoreText md:text-xl">
          Player
        </span>
        <span className="text-4xl font-bold text-darkText md:text-[56px]">
          {score.playerScore}
        </span>
      </div>

      <ul className="m-auto flex flex-col">
        <div className="flex justify-between gap-4">
          <Word input="rock" />
        </div>

        <div className="flex justify-between gap-4">
          <Word input="paper" />
        </div>
        <div className="flex justify-between gap-4">
          <Word input="scissors" />
        </div>
        {gameMode === "hard" && (
          <>
            <div className="flex justify-between gap-4">
              <Word input="spock" />
            </div>
            <div className="flex justify-between gap-4">
              <Word input="lizard" />
            </div>
          </>
        )}
      </ul>

      <div className="flex w-full flex-col items-center justify-center rounded-md bg-white px-6 py-3 md:px-12">
        <span className="text-lg font-semibold uppercase tracking-widest text-scoreText md:text-xl">
          CPU
        </span>
        <span className="text-4xl font-bold text-darkText md:text-[56px]">
          {score.cpuScore}
        </span>
      </div>
    </div>
  );
}
