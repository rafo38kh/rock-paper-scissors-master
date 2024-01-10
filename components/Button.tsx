import { GameContext } from "@/contexts/GameContextProvider";
import { playerTypes } from "@/lib/gameInfo";
import { useContext } from "react";

type ButtonProps = {
  playerType: string;
  className?: string | null;
  handlePlayerSelection: (player: string) => void;
};

export default function Button({
  className,
  playerType,
  handlePlayerSelection,
}: ButtonProps) {
  const { cpu, player } = useContext(GameContext);

  return (
    <button
      type="button"
      disabled={!!(cpu || player)}
      onClick={() => handlePlayerSelection(playerType)}
      style={{ borderColor: playerTypes[playerType]?.firstColor }}
      className={`col-span-2 w-full rounded-xl border-[6px] border-solid md:border-[15px] ${className} ${player} disabled:opacity-50 hover:disabled:cursor-not-allowed`}
    >
      <div
        className={`flex h-full w-full items-center justify-center rounded-md bg-white p-2`}
      >
        {playerTypes[playerType]?.svg}
      </div>
    </button>
  );
}
