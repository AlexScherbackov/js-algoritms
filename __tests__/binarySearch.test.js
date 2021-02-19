import binarrysearch from '../src/binarySearch';

let arr;

beforeEach(() => {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
});

describe('test function binarrySearch', () => {
  test('searching should be unmutabl', () => {
    const clone = arr.slice();
    binarrysearch(arr, 8);
    expect(arr).toEqual(clone);
  });

  test('should return zero value if nothing is found', () => {
    expect(binarrysearch(arr, 500)).toBe(-1);
  });

  test('should return a index of value if it is found', () => {
    expect(binarrysearch(arr, 8)).toBe(7);
  });
});
