//20.- Calcular el factorial de un número, mediante funciones.

function factorial(number) {
    if (number < 0) 
          return null;
    else if (number == 0) 
        return 1;
    else {
        return (number * factorial(number - 1));
    }
}
  
console.log(factorial(5));
