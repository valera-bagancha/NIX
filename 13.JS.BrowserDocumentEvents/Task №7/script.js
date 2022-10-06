button.addEventListener("click" , () => alert ( "1" ));
button.removeEventListener("click" , () => alert ( "1" ));
button.onclick = () => alert ( 2 ); //Вiдповiдь 1 и 2. Перший обробник спрацює, тому що він не був видалений методом removeEventListener
// Незважаючи на те, що код ідентичний, в removeEventListener передається нова, інша функція. Тому обробник не видаляеться

