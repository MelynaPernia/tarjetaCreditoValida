#### Pseudocódigo del programa tarjeta de crédito válida.
*Pseudocodigo para ingresar*
1. Hacer

  i. Leer numberCard
2. Mientras (numberCard===undefined)

*Pseudocódigo de la función isValidCard*
1. Funcion isValidCard
  + arrNumberReverse= numberCard.reverse();
  + newArr=[];
  + sum=0;
  + sumDigit=0;

  + Para i=0 Hasta n.length Con Paso 1 Hacer
    i. newArr[i]=(parseInt)arrNumberReverse[i];
  + Fin de Para

  + Para j=0 Hasta newArr.length Con Paso 1 Hacer
    i. Si (((j+1)%2)===0)
        + Si (newArr[j]x2 >= 10)
            i. sumDigit=(trunc)newArr[j]x2)/10+ (newArr[j]x2)%10;
            ii. sum+=sumDigit;
        + Si no
            i. sum+=newArr[j]x2;
        + Fin Si
    ii. Si no
        i. sum+=newArr[j];
    iii. Fin si
  + Fin de Para
  + Si(sum%2===0)
    i. Escribir 'Numero de tarjeta Valida';
  + Si no
    i. Escribir 'Numero de tarjeta no Valida';
  + Fin de Si
21. Fin Funcion
