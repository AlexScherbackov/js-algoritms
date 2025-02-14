import breadthFirstSearch from '../src/breadthFirstSearch';

const friends = new Map([
  ['You', ['Alice', 'Nick', 'Wes']],
  ['Alice', ['Wes', 'Peggi', 'John', 'You']],
  ['Nick', ['Alex', 'Wayne', 'You']],
  ['Wes', ['Peggi', 'Alice', 'You']],
  ['Peggi', ['Alex', 'Alice']],
  ['John', ['Alice']],
  ['Alex', ['Peggi', 'Nick']],
  ['Wayne', ['Nick']],
]);

const birthdayBody = 'Wayne';

describe('breadthFirstSearch shouldReturn birthdayBody', () => {
  test('return correct element', () => {
    expect(
      breadthFirstSearch(
        friends,
        birthdayBody,
        'You',
        (nameA, nameB) => nameA === nameB,
      ),
    ).toEqual(birthdayBody);
  });
});
