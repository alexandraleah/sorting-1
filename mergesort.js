function mergeSort(array) {
  if (array.length < 2) return array; // base case
  const splits = split(array);
  const left = splits[0];
  const right = splits[1];
  return merge(mergeSort(left), mergeSort(right));
}

function split(wholeArr) {
  let half = wholeArr.length / 2;
  let left = wholeArr.slice(0, half);
  let right = wholeArr.slice(half);
  console.log('split and make a right side ' + right);
  return [left, right];
}

function merge(left, right) {
  const temp = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  for (; leftIndex < left.length; leftIndex++) {
    console.log();
    merged.push(left[leftIndex]);
  }
  for (; rightIndex < right.length; rightIndex++) {
    merged.push(right[rightIndex]);
  }
  return temp;
}
