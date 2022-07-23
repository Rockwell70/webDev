const splitList = require('./splitList.js')

describe("splitList() function tests", () => {
  test("[1, 2, 3, 4, 5, 6] === [[1, 2, 3], [4, 5, 6]]", () => {
    expect(splitList([1, 2, 3, 4, 5, 6])).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });
  test("[1, 2, 3] === [[1, 2], [3]]", () => {
    expect(splitList([1, 2, 3])).toStrictEqual([[1, 2], [3]]);
  });
  test("[1, 2, 3, 4, 5] === [[1, 2, 3], [4, 5]]", () => {
    expect(splitList([1, 2, 3, 4, 5])).toStrictEqual([[1, 2, 3], [4, 5]]);
  });
  test("[] === [[], []]", () => {
    expect(splitList([])).toStrictEqual([[], []]);
  });
  test("[1] === [[1], []]", () => {
    expect(splitList([1])).toStrictEqual([[1], []]);
  });
});
