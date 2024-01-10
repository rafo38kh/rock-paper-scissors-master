"use client";
import {
  createContext,
  useState,
  useMemo,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// export enum EasyMode {
//   rock = "rock",
//   paper = "paper",
//   scissors = "scissors",
// }

export enum HardMode {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
  lizard = "lizard",
  spock = "spock",
}

// export type CPUType = {
//   svg: ReactNode;
//   name: string;
// };

type GameContext = {
  gameMode: "easy" | "hard";
  setGameMode: Dispatch<SetStateAction<"easy" | "hard">>;
  player: string;
  setPlayer: Dispatch<SetStateAction<string>>;
  cpu: string;
  setCpu: Dispatch<SetStateAction<string>>;
  winner: "user" | "cpu" | null;
  setWinner: Dispatch<SetStateAction<"user" | "cpu" | null>>;
  isModalOpend: true | false;
  setIsModalOpend: Dispatch<SetStateAction<true | false>>;
  score: {
    playerScore: number;
    cpuScore: number;
  };
  setScore: Dispatch<
    SetStateAction<{
      playerScore: number;
      cpuScore: number;
    }>
  >;
};

export const GameContext = createContext<GameContext>({
  gameMode: "easy",
  setGameMode: () => {},
  player: "",
  setPlayer: () => {},
  cpu: "",
  setCpu: () => {},
  winner: null,
  setWinner: () => {},
  isModalOpend: false,
  setIsModalOpend: () => {},
  score: {
    playerScore: 0,
    cpuScore: 0,
  },
  setScore: () => {},
});

type GameContextProviderProps = { children: ReactNode | ReactNode[] };

const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [cpu, setCpu] = useState("");
  const [player, setPlayer] = useState("");
  const [gameMode, setGameMode] = useState<"easy" | "hard">("easy");
  const [winner, setWinner] = useState<"user" | "cpu" | null>(null);
  const [isModalOpend, setIsModalOpend] = useState(Boolean);
  const [score, setScore] = useState({
    playerScore: 0,
    cpuScore: 0,
  });

  const value = useMemo(
    () => ({
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
    }),
    [
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
    ],
  );

  return (
    <GameContext.Provider value={value}> {children} </GameContext.Provider>
  );
};

export default GameContextProvider;
