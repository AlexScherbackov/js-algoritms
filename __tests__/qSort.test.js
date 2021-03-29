import qSort from '../src/qSort.js';

describe('qSort takes an array and return sorted array', () => {
    test('shouldn\'t mutate origin array', () => {
        const testArr = [2, 3, 1, 7, 9];
        const expected = testArr.slice();
        qSort(testArr);
        expect(testArr).toEqual(expected);
    });

    test('should works correctly', () => {
        const emptyArr = [];
        expect(qSort(emptyArr)).toEqual([]);

        const testArr = [2, 3, 1, 7, 9];
        const expected = [1, 2, 3, 7, 9];
        expect(qSort(testArr)).toEqual(expected);
    });
})