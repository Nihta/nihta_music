export * from './permission';

export const getRandomNumber = (min, max) => {
  let random = Math.round(Math.random() * (max - min) + min);
  return random >= max ? random - 1 : random;
};
