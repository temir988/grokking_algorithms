const sum = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  const el = arr.pop();
  return el * sum(arr);
};

console.log(sum([1, 2, 3]));