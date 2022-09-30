// Task №6
function calc(a, b, operation) {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
  }
}

  console.log(calc(1, 2, '*'));

// Task №7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];
let names = users.map(item => item.name);
console.log(names);

// Task №8
function sortByAge(users) {
  users.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);


// Task №9
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];
console.log(getAverageAge(arr));

// Task №10
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "крішна", ":-O"];

console.log(unique(strings));