const binarySearch = (arr, x) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + end / 2);
    if (arr[mid] === x) return true;
    else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};

console.log(binarySearch([1, 3, 4, 5, 6, 7], 13));
