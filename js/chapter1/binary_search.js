function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

const myList = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, 17));
