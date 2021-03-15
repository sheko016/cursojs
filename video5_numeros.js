/*Numeros*/

let number = 5;
let number2 = new Number(8);
let number3 = 7.19;
let numbertext = "45.12";
console.log(number);
console.log(number2);
console.log(number3.toFixed(1)); //Numeros de decimales que va a contener
console.log(parseInt(number3)); // Muestra el numero sin decimales
console.log(parseFloat(number3));
console.log(parseInt(numbertext));
console.log(typeof number, typeof numbertext);
console.log(number + number2);
console.log(number3 + parseInt(numbertext));
console.log(number3 + parseFloat(numbertext));
console.log(number3 + Number.parseInt(numbertext));
console.log(number3 + Number.parseFloat(numbertext));