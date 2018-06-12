describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    let testArr = [1, 2, 3, 4, 5, 6];
    expect(split(testArr)).toEqual([[1, 2, 3], [4, 5, 6]]);
  });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves if it has an odd length', function() {
    let testArr = [1, 2, 3, 4, 5];
    expect(split(testArr)).toEqual([[1, 2], [3, 4, 5]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    let testArr = [5, 6, 8, 1, 3, 2, 7, 4];
    expect(merge(testArr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
