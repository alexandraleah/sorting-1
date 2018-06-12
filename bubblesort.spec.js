function numerically(a, b) {
  return a - b;
}

function generateArray(size, lower, upper) {
  var randomArray = [];
  while (size--) {
    var randomNum = Math.floor(lower + Math.random() * upper);
    randomArray.push(randomNum);
  }
  return randomArray;
}
describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an array of 1 element', function() {
    expect(bubbleSort([5])).toEqual([5]);
  });
  // it('sorts an array with an even number of elements', function() {
  //   expect(bubbleSort([1, 7, 9, 3, 6, 4])).toEqual([1, 3, 4, 6, 7, 9]);
  // });
  // it('sorts an array with an odd number of elements', function() {
  //   expect(bubbleSort([1, 7, 9, 3, 6])).toEqual([1, 3, 6, 7, 9]);
  // });
  for (var i = 2; i < 103; i += 21) {
    it('sorts an array of ' + i + ' random items', function() {
      var arr = generateArray(i, 0, 100);
      var sorted = arr.slice(0).sort(numerically);
      expect(bubbleSort(arr)).toEqual(sorted);
    });
  }

  it('compares the expected number of times', function() {
    spyOn(window, 'comparison').and.callThrough();
    bubbleSort([4, 6, 5, 1]);
    expect(comparison.calls.count()).toEqual(10);
  });
  it('swaps the expected number of times', function() {
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([4, 6, 5, 1]);
    expect(swap.calls.count()).toEqual(4);
  });
});
