const length = (arr) => {
  if (arr.length === 1) {
    return 1;
  }
  arr.pop();
  return 1 + length(arr);
};

console.log(length([1, 2, 3, 4, 5]));