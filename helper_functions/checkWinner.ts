import { CPUType } from "@/contexts/GameContextProvider";

export const checkWinner = (playerType: string, cpuType: CPUType | null) => {
  if (playerType === "paper" && cpuType?.name === "rock") {
    return "user";
  } else if (playerType === "paper" && cpuType?.name === "spock") {
    return "user";
  } else if (playerType === "rock" && cpuType?.name === "scissors") {
    return "user";
  } else if (playerType === "rock" && cpuType?.name === "lizard") {
    return "user";
  } else if (playerType === "lizard" && cpuType?.name === "spock") {
    return "user";
  } else if (playerType === "lizard" && cpuType?.name === "paper") {
    return "user";
  } else if (playerType === "spock" && cpuType?.name === "scissors") {
    return "user";
  } else if (playerType === "spock" && cpuType?.name === "rock") {
    return "user";
  } else if (playerType === "scissors" && cpuType?.name === "paper") {
    return "user";
  } else if (playerType === "scissors" && cpuType?.name === "lizard") {
    return "user";
  } else {
    return "cpu";
  }
};
