export const checkWinner = (
  playerType: string,
  cpuType: string
): "user" | "cpu" | null => {
  if (!playerType) return null;

  // const winningCombinations: Record<string, string[]> = {
  //   paper: ["rock", "spock"],
  //   rock: ["scissors", "lizard"],
  //   lizard: ["spock", "paper"],
  //   spock: ["scissors", "rock"],
  //   scissors: ["paper", "lizard"],
  // };

  // const winner = winningCombinations[playerType]?.includes(cpuType)
  //   ? "cpu"
  //   : "user";

  if (playerType === "paper" && cpuType === "rock") {
    return "user";
  } else if (playerType === "paper" && cpuType === "spock") {
    return "user";
  } else if (playerType === "rock" && cpuType === "scissors") {
    return "user";
  } else if (playerType === "rock" && cpuType === "lizard") {
    return "user";
  } else if (playerType === "lizard" && cpuType === "spock") {
    return "user";
  } else if (playerType === "lizard" && cpuType === "paper") {
    return "user";
  } else if (playerType === "spock" && cpuType === "scissors") {
    return "user";
  } else if (playerType === "spock" && cpuType === "rock") {
    return "user";
  } else if (playerType === "scissors" && cpuType === "paper") {
    return "user";
  } else if (playerType === "scissors" && cpuType === "lizard") {
    return "user";
  } else {
    return "cpu";
  }

  // console.log("winner", winner);

  // return winner;
  // return winningCombinations[playerType]?.includes(cpuType) ? "user" : "cpu";
};
