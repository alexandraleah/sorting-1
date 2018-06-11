function swap(arr1, arr2) {
    let temp = arr1;
    arr1 = arr2;
    arr2 = temp;
}
function comparison() {
  if(arr[i] > arr[i + 1]) {
      return false;
  }  
 return true;
}

function bubbleSort(arr) {
 /* your code here */
    let myArr = [];
    for (var i = 0; i < arr.length - 1; i++){
        if (!comparison(arr[i])){
            console.log('BEFORE:', arr)
            swap(arr[i], arr[i+1]);
            console.log('AFTER:', arr);
        }
        
    }
    return myArr;
}