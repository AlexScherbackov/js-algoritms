import selectionSort from '../src/selectionSort';

const arrForSort = [10, 7, 8, 16, 99, 57];
const expectedArr = [7, 8, 10, 16, 57, 99];

const findSmallest = (arr) => Math.min(...arr);

describe('selectionSort takes array and sort function and return sorted array. Origin array should be unmitable.', () => {
  test('Is origin array unmutable?', () => {
    const expected = arrForSort.slice();
    selectionSort(arrForSort, findSmallest);
    expect(arrForSort).toEqual(expected);
  });

  test('Is return array correct?', () => {
    expect(selectionSort(arrForSort, findSmallest)).toEqual(expectedArr);
  });
});
