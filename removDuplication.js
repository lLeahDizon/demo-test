const array = [1, 5, 2, 3, 4, 2, 3, 1, 3, 4, NaN, NaN, { 1: 2 }, { 1: 2 }];

// indexOf去重
function unique1(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) < 0) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
  return newArray;
}

// Map去重
function unique2(array) {
  let hashMap = new Map();
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (hashMap.has(array[i])) {
      hashMap.set(array[i], true);
    } else {
      hashMap.set(array[i], false);
    }
  }
  console.log(Array.from(hashMap.keys()));
  return Array.from(hashMap.keys());
}

function unique(array) {
  console.log([...new Set(array)]);
  return [...new Set(array)];
}

unique(array);
