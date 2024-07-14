const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (items) =>
  items[getRandomInteger(0, items.length - 1)];

const createIdGenerator = () => {
  let numId = 0;

  return() => {
    numId += 1;
    return numId;
  };
};

export {
  getRandomInteger,
  getRandomArrayElement,
  createIdGenerator,
};

