let binarySearch = (list, target) => {
  let first = 0;
  let last = list.length - 1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (mid === target) {
      return target;
    } else if (mid > target) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
};

let verify = (index) => {
  if (index) {
    console.log('Target is found at index: ', index);
  } else {
    console.log('Target is not found in list');
  }
};

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
result = binarySearch(numbers, 4);

console.log('Yes');
console.log(result);
verify(result);
