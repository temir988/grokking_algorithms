const bigger = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  const el = arr.pop();
  const next = bigger(arr);
  return (el > next) ? el : next;
};

console.log(bigger([1, 5, 10, 35]));