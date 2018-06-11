function split(wholeArr) {
  if (wholeArr.length <= 1) {
    return wholeArr;
  }

  let half = Math.ceil(wholeArr.length / 2);
  let left = wholeArr.slice(0, half);
  let right = wholeArr.slice(half, wholeArr.length);

  wholeArr = [left, right];

  return wholeArr;
}

function merge(left, right) {
  let temp = [];

  // if (left.length <= 1) {
  //   temp.push(left);
  // }

  for (var i = 0 var j = 0; i < left.length; i++) {
    console.log(i);
    if (left.length === 1) {
      temp.push(left);
    }
    if (left[i] <= right[i]) {
      temp.push(left[i]);
    } else {
      temp.push(right[i]);
    }
  }
  return temp;
}
