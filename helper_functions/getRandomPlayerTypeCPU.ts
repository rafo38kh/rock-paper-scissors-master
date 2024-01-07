import { playerTypes } from "@/lib/gameInfo";

export const getRandomPlayerTypeCPU = (userSelection: string) => {
  const objectKeys = Object.keys(playerTypes);

  const filteredKeys = objectKeys.filter((key) => key !== userSelection);
  console.log(filteredKeys, "filteredKeys");

  const randomIndex = Math.floor(Math.random() * filteredKeys.length);
  const cpuSelection = playerTypes[filteredKeys[randomIndex]].name;

  return cpuSelection;
};

// export const getRandomPlayerTypeCPU = (player: string) => {
//   const allOptions = ["paper", "rock", "scissors", "spock", "lizard"];

//   console.log(allOptions.indexOf(player));

//   // const userSelectionIndex = findUserSelectionIndex(player);

//   // console.log(userSelectionIndex, "userSelectionIndex");

//   // console.log(
//   //   allOptions.splice(, 1),
//   //   "filteredObjects"
//   // );

//   const randomIndex = Math.floor(Math.random() * allOptions.length);

//   return playerTypes[allOptions[randomIndex]].name;
// };
