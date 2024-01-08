import React, { useContext } from "react";

import Image from "next/image";

import { GameContext } from "@/contexts/GameContextProvider";

import easyIcon from "@/public/images/logo.svg";
import hardIcon from "@/public/images/logo-bonus.svg";

export default function Score() {
  const { gameMode, score } = useContext(GameContext);

  return (
    <div className="flex items-center justify-between rounded-md border-[3px] border-solid border-[#606E85] p-3">
      <div className="h-full">
        {gameMode === "easy" ? (
          <Image src={easyIcon} alt="Icon" layout="responsive" />
        ) : (
          <Image src={hardIcon} alt="Icon" layout="responsive" />
        )}
      </div>

      <div className="flex h-full flex-col items-center justify-center rounded-md bg-white px-6 py-3 md:px-12">
        <span className="text-[.625rem] font-semibold uppercase tracking-widest text-[#2A46C0] md:text-sm">
          Score
        </span>
        <span className="text-4xl font-bold text-[#3B4363] md:text-[46px]">
          {score}
        </span>
      </div>
    </div>
  );
}
