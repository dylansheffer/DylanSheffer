// Get random property from object
// https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
export const getRandomProperty = function(obj) {
  const keys = Object.keys(obj);
  // eslint-disable-next-line no-bitwise
  return keys[(keys.length * Math.random()) << 0];
};
