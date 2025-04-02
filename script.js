//Genera un número aleatorio entre 0 y 100 redondeando y muéstralo por consola

let randomNumber1 = Math.round(Math.random() * 100);
console.log(randomNumber1);

//Muestra por consola el valor de PI.

console.log(Math.PI);

//Genera un número aleatorio entre 5 y 10 redondeando y muéstralo por consola. Para  este caso lo recomendado es utilizar la fórmula (Math.random()* (max-min)+min).

let min = 5;
let max = 10;
let randomNumber2 = Math.round(Math.random() * (max - min) + min);
console.log(randomNumber2);

//Comprueba el funcionamiento del método sign(). 

console.log("Math.sign(-10):", Math.sign(-10)); // -1
console.log("Math.sign(0):", Math.sign(0)); // 0
console.log("Math.sign(10):", Math.sign(10)); // 1