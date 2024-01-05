import { playerTypes } from "@/lib/gameInfo";

export const getRandomPlayerTypeCPU = (playerType: string) => {
  // const types = Object.keys(playerTypes);
  // const filterdTypes = types.filter((el) => el !== playerType);
  // const randomIndex = Math.floor(Math.random() * filterdTypes.length);

  // return playerTypes[filterdTypes[randomIndex]].name;

  const objectKeys = Object.keys(playerTypes);
  const filterdObjectKeys = objectKeys.filter((cpu) => cpu !== playerType);
  const randomIndex = Math.floor(Math.random() * filterdObjectKeys.length);

  return playerTypes[filterdObjectKeys[randomIndex]].name;
};
