// Get random property from object
// https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
export const getRandomProperty = function(obj) {
  const keys = Object.keys(obj);
  // eslint-disable-next-line no-bitwise
  return keys[(keys.length * Math.random()) << 0];
};

// helper function from https://stackoverflow.com/questions/29855098/is-there-a-built-in-javascript-function-similar-to-os-path-join
export const pathJoin = (...args) =>
  args
    .map((part, i) => {
      if (i === 0) {
        return part.trim().replace(/[\/]*$/g, '');
      }
      return part.trim().replace(/(^[\/]*|[\/]*$)/g, '');
    })
    .filter(x => x.length)
    .join('/');
