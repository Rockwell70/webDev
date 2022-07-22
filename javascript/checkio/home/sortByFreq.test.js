const frequencySort = require('./sortByFreq.js');

describe('frequencySort() function tests', () => {
  test('[4, 6, 2, 2, 6, 4, 4, 4] === [4, 4, 4, 4, 6, 6, 2, 2]', () => {
    expect(frequencySort([4, 6, 2, 2, 6, 4, 4, 4])).toStrictEqual([4, 4, 4, 4, 6, 6, 2, 2]);
  });
  test("['bob', 'bob', 'carl', 'alex', 'bob'] === ['bob', 'bob', 'bob', 'carl', 'alex']", () => {
    expect(frequencySort(['bob', 'bob', 'carl', 'alex', 'bob'])).toStrictEqual(['bob', 'bob', 'bob', 'carl', 'alex']);
  });
  test("[17, 99, 42] === [17, 99, 42]", () => {
    expect(frequencySort([17, 99, 42])).toStrictEqual([17, 99, 42]);
  });
  test("[] === []", () => {
    expect(frequencySort([])).toStrictEqual([]);
  });
  test("[1] === [1]", () => {
    expect(frequencySort([1])).toStrictEqual([1]);
  });
});

