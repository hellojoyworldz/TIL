let array = [1, 2, 3, 3, 3, 5, 4, 7, 8, 2, 1, 0, 9, 8];

// set()
const setArray = [...new Set(array)].sort();
console.log(setArray);

// filter()
const filterArray = array
  .filter((val, idx, self) => self.indexOf(val) === idx)
  .sort();
console.log(filterArray);

// reduce()
const reduceArray = array
  .reduce((acc, cur) => {
    if (acc.indexOf(cur) === -1) {
      acc.push(cur);
    }
    return acc;
  }, [])
  .sort();
console.log(reduceArray);

// includes()
let includesArray = [];
array.forEach((val) => {
  if (!includesArray.includes(val)) {
    includesArray.push(val);
  }
});
console.log(includesArray);
