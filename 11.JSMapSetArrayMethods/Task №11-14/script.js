// Task №11
function unique(arr) {
  let uniqueArray = [...new Set(values)]
  return uniqueArray
  }

  let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
  
  alert(unique(values)); 

// Task №12
function makeCounter() {
  let count = 0;
  return function() {
  return count++; 
  };
}
  let counter = makeCounter();
  let counter2 = makeCounter();

  console.log(counter ()); // 0
  console.log(counter ()); // 1
  console.log(counter2 ()); // 0
  console.log(counter2 ()); // 1
// они независимые потому что функции counter и counter2 созданы разными вызовами makeCounter

// Task №13
function Counter() {
  let count = 0;
  this.up = function() {
  return ++count;
  };
  this.down = function() {
  return - count;
  };
  }
  let counter = new Counter();
  alert(counter.up()); // 1
  alert(counter.up()); // 2 
  alert(counter.down() ); // -2

  // Task №14
  function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  console.log(factorial(1));
  console.log(factorial(2));
  console.log(factorial(3));
  console.log(factorial(4));
  console.log(factorial(5));


