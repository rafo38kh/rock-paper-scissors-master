import React, { useContext } from "react";

import Image from "next/image";

import { GameContext } from "@/contexts/GameContextProvider";

import easyIcon from "@/public/images/logo.svg";
import hardIcon from "@/public/images/logo-bonus.svg";

export default function Score() {
  const { gameMode, score } = useContext(GameContext);

  return (
    <div className="border-headerOutline flex items-center justify-between rounded-md border-[3px] border-solid p-3">
      <div className="h-full">
        {gameMode === "easy" ? (
          <Image src={easyIcon} alt="Icon" layout="responsive" />
        ) : (
          <Image src={hardIcon} alt="Icon" layout="responsive" />
        )}
      </div>

      <div className="flex h-full flex-col items-center justify-center rounded-md bg-white px-6 py-3 md:px-12">
        <span className="text-scoreText text-[.625rem] font-semibold uppercase tracking-widest md:text-sm">
          Score
        </span>
        <span className="text-darkText text-4xl font-bold md:text-[46px]">
          {score}
        </span>
      </div>
    </div>
  );
}
