export default (arr, expectedSum) => {
  const iter = (indexA, indexB) => {
    if (indexA === indexB) {
      return false;
    }

    const elA = arr[indexA];
    const elB = arr[indexB];

    if (elA + elB === expectedSum) {
      return [indexA, indexB];
    }

    const newLow = elA + elB > expectedSum ? indexA : indexA + 1;
    const newHigh = elA + elB > expectedSum ? indexB - 1 : indexB;

    return iter(newLow, newHigh);
  };

  const lowIndex = 0;
  const maxIndex = arr.length - 1;

  return iter(lowIndex, maxIndex);
};
