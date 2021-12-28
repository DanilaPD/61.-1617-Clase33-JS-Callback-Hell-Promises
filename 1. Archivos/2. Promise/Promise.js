//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

//? Con una "promesa", anidamos más comodamente.

const dividir = (num1, num2) => {
  return new Promise((resolve, reject) => {
    // El "cortocircuito" no necesita que una "condición" dé "false" como pasaba con el "ternario".
    num1 === 0 && reject(new Error("You have made a mistake.")); // Cortocircuito: Si "num === 0" es verdad, "reject it".
    // Si fuese falso, no entraría ahí y saltaría al siguiente.
    num2 === 0 && reject(new Error("You have made a mistake."));

    resolve(num1 / num2);
  });
};

dividir(100, 3)
  .then((result1) => {
    console.log(result1);
    return dividir(result1, 2);
  })
  .then((result2) => {
    console.log(result2);
    return dividir(result2, 0);
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((err) => console.log(err)) // Hay un solo "catch" para toda la cadena de "thens"; todos van a entrar ahí si fallan.
  .finally(console.log("Esto es todo, amigos.")); // Siempre va a entrar al "finally", sin importar si las operaciones salieron bien o mal.

//! La estructura es:
//? dividir().then().then().catch().finally()
