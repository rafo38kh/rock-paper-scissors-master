"use client";
import {
  createContext,
  useState,
  useMemo,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export enum EasyMode {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
}

export enum HardMode {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
  lizard = "lizard",
  spock = "spock",
}

export type CPUType = {
  svg: ReactNode;
  name: string;
};

type GameContext = {
  gameMode: "easy" | "hard";
  setGameMode: Dispatch<SetStateAction<"easy" | "hard">>;
  // playerType: EasyMode | HardMode | null;
  playerType: string;
  // setPlayerType: Dispatch<SetStateAction<EasyMode | HardMode | null>>;
  setPlayerType: Dispatch<SetStateAction<string>>;
  cpuType: CPUType | null;
  setCpuType: Dispatch<SetStateAction<CPUType | null>>;
  winner: "user" | "cpu" | null;
  setWinner: Dispatch<SetStateAction<"user" | "cpu" | null>>;
};

export const GameContext = createContext<GameContext>({
  gameMode: "easy",
  setGameMode: () => {},
  playerType: "",
  setPlayerType: () => {},
  cpuType: {
    svg: null,
    name: "",
  },
  setCpuType: () => {},
  winner: null,
  setWinner: () => {},
});

type GameContextProviderProps = { children: ReactNode[] };

const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [gameMode, setGameMode] = useState<"easy" | "hard">("easy");
  const [playerType, setPlayerType] = useState("");
  const [cpuType, setCpuType] = useState<CPUType | null>(null);
  const [winner, setWinner] = useState<"user" | "cpu" | null>(null);

  const value = useMemo(
    () => ({
      gameMode,
      setGameMode,
      playerType,
      setPlayerType,
      cpuType,
      setCpuType,
      winner,
      setWinner,
    }),
    [
      gameMode,
      setGameMode,
      playerType,
      setPlayerType,
      cpuType,
      setCpuType,
      winner,
      setWinner,
    ]
  );

  return (
    <GameContext.Provider value={value}> {children} </GameContext.Provider>
  );
};

export default GameContextProvider;
