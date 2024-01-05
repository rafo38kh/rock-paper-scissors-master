import React, { useContext } from "react";

import Image from "next/image";
import { GameContext } from "@/contexts/GameContextProvider";

import easyIcon from "@/public/images/logo.svg";
import hardIcon from "@/public/images/logo-bonus.svg";

export default function Score() {
  const { gameMode, score } = useContext(GameContext);

  return (
    <div className="flex justify-between items-center p-6 rounded-md border-solid border-[3px] border-[#606E85]">
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
  );
}
