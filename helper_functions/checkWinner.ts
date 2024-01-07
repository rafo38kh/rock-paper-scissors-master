// export const checkWinner = (
//   playerType: string,
//   cpuType: string
// ): "user" | "cpu" => {
//   if (playerType === "paper" && cpuType === "rock") {
//     return "user";
//   } else if (playerType === "paper" && cpuType === "spock") {
//     return "user";
//   } else if (playerType === "rock" && cpuType === "scissors") {
//     return "user";
//   } else if (playerType === "rock" && cpuType === "lizard") {
//     return "user";
//   } else if (playerType === "lizard" && cpuType === "spock") {
//     return "user";
//   } else if (playerType === "lizard" && cpuType === "paper") {
//     return "user";
//   } else if (playerType === "spock" && cpuType === "scissors") {
//     return "user";
//   } else if (playerType === "spock" && cpuType === "rock") {
//     return "user";
//   } else if (playerType === "scissors" && cpuType === "paper") {
//     return "user";
//   } else if (playerType === "scissors" && cpuType === "lizard") {
//     return "user";
//   } else {
//     return "cpu";
//   }
// };

export const checkWinner = (
  playerType: string,
  cpuType: string
): "user" | "cpu" => {
  const winningCombinations: Record<string, Record<string, boolean>> = {
    paper: { rock: true, spock: true },
    rock: { scissors: true, lizard: true },
    lizard: { spock: true, paper: true },
    spock: { scissors: true, rock: true },
    scissors: { paper: true, lizard: true },
  };

  return winningCombinations[playerType] &&
    winningCombinations[playerType][cpuType]
    ? "user"
    : "cpu";
};
