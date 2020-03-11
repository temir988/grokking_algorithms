const findSmallest = arr => {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = arr => {
  const newArr = [];
  const length = arr.length;
  for (let i = 0; i < length; i += 1) {
    const smallestIndex = findSmallest(arr);
    newArr.push(arr[smallestIndex]);
    arr.splice(smallestIndex, 1);
  }
  return newArr;
};
const arr = [5, 3, 50, 23, 123, -15, 6, 2, 10];
console.log(selectionSort(arr));
