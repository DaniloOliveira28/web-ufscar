const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function addNumber(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(addNumber(+input1.value, +input2.value));
});

//The + operator returns the numeric representation of the object. 
// So in your particular case, it would appear to be predicating the if on whether or not d is a non-zero number.
// https://stackoverflow.com/questions/6682997/what-is-the-purpose-of-a-plus-symbol-before-a-variable