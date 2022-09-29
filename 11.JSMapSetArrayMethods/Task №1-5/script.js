// Task №1
function camelize(str) {
  return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join(''); 
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// Task №2
function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);

// Task №3
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (value < a || value > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);
 
// Task №4
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert(arr);

// Task №5
function copySorted(arr) {
  return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted);
console.log(arr);

