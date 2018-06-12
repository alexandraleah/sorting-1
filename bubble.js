function swap(arr, i) {
  const a = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = a;
}
//check to see if they are already ordered
function comparison(arr, i) {
  if (i === arr.length - 1) return true;
  return arr[i] < arr[i + 1];
}

function bubbleSort(arr) {
  let sorted = false;
  //passes
  for (let end = arr.length; end > 0 && !sorted; end--) {
    sorted = true;
    //bubbling
    for (let i = 0; i < end; i++) {
      if (!comparison(arr, i)) {
        swap(arr, i);
        sorted = false;
      }
    }
  }
  return arr;
}
