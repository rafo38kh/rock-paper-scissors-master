import { playerTypes } from "@/lib/gameInfo";

type ButtonProps = {
  playerType: string;
  className?: string | null;
  handlePlayerSelection: (player: string) => void;
  //   handlePlayerSelection: Dispatch<SetStateAction<string>>;
};

export default function Button({
  className,
  playerType,
  handlePlayerSelection,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={() => handlePlayerSelection(playerType)}
      className={`flex aspect-square w-32 items-center justify-center rounded-full border-[20px] border-solid  bg-white md:w-48 border-[${playerTypes[playerType]?.firstColor}] ${className}`}
      //   onClick={handlePlayerSelection}
    >
      {playerTypes[playerType]?.svg}
    </button>
  );
}
