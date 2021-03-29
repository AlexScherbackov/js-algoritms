export default (arr, value) => {
  const process = (low, high) => {
    if (low > high) {
      return -1;
    }

    const mid = (low + high) / 2;
    const index = (mid ^ 0) === mid
      ? mid
      : Math.floor(mid);
    const quess = arr[index];
    const newRange = value >= quess ? [index + 1, high] : [low, index - 1];

    return value === quess ? index : process(...newRange);
  };

  const low = 0;
  const high = arr.length - 1;

  return process(low, high);
};
