import twoPointerMethod from '../src/twoPointerMethod';

describe(`twoPointerMethod takes sorted array and test function,
 returns pair of elements' indexes that satisfy the fn conditions`, () => {
  test('should work', () => {
    const testArr = [1, 2, 3, 3, 5, 7, 8, 9, 25, 27, 31, 32, 39];

    expect(twoPointerMethod(testArr, 38)).toEqual([5, 10]);
    expect(twoPointerMethod(testArr, 0)).toBeFalsy();
  });
});
