let selectedOption = genres.options[genres.selectedIndex];
console.log(selectedOption.value);
console.log(selectedOption.text);

let newOption = new Option("Классика", "classic");
genres.append(newOption);

newOption.selected = true;