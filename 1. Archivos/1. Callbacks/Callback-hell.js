const dividir = (num1, num2, cb) => {
  if (num1 === 0 || num2 === 0) {
    // Si alguno es igual a 0.
    cb(console.log("ufa"), null); //* Este "null" puede estar o no. Total, si dio "error", no va a dar un "resultado" y, por lo tanto, no va a entrar acá.
  } else {
    cb(null, num1 / num2);
  }
};

dividir(7, 2, (error, result1) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result1);
    console.log(typeof result1);
  }
});

//? "&&" ambas expresiones tienen que cumplir con la condición.
//? "||" una de las dos expresiones tiene que cumplir con la condición.

//! Callback hell:
//* Es una mala práctica hacerlo así:
dividir(48, 2, (error, result1) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result1);
    dividir(result1, 3, (error, result2) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result2);
        dividir(result2, 5, (error, result3) => {
          if (error) {
            console.log(error);
          } else {
            console.log(result3);
          }
        });
      }
    });
  }
});
