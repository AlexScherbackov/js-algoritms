export default (arr, fn) => {
  const process = (acc, coll) => {
    if (coll.length === 0) {
      return acc;
    }

    const current = fn(coll);
    const newColl = coll.filter((i) => current !== i);
    return process([...acc, current], newColl);
  };

  return process([], arr);
};
