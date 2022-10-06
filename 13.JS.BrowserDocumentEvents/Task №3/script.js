document.onclick = function(e) {
  coords.innerHTML = e.clientX + ':' + e.clientY;
}

let fieldCoords = field.getBoundingClientRect();

let answer = [
  [
    fieldCoords.left,
    fieldCoords.top
  ],
  [
    fieldCoords.right,
    fieldCoords.bottom
  ],
  [
    fieldCoords.left + field.clientLeft,
    fieldCoords.top + field.clientTop
  ],
  [ 
    fieldCoords.left + field.clientLeft + field.clientWidth,
    fieldCoords.top + field.clientTop + field.clientHeight
  ]
];
console.log(answer.join('  '));
