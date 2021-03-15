let verdadero = true;
let falso = false;

let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso);
console.log(typeof verdadero, typeof falso);

console.log(v, f);
console.log(typeof v, typeof f);

console.log(Boolean(0)); //false
console.log(Boolean(-7)); //true
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true