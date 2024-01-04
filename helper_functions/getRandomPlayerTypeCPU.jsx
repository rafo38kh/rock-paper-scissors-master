import { playerTypes } from "@/lib/gameInfo";

export const getRandomPlayerTypeCPU = (playerType) => {
  const types = Object.keys(playerTypes);
  const filterdTypes = types.filter((el) => el !== playerType);
  const randomIndex = Math.floor(Math.random() * filterdTypes.length);
  return playerTypes[filterdTypes[randomIndex]];
};
