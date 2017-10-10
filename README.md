#### Pseudocódigo del programa tarjeta de crédito válida.
*Pseudocodigo para ingresar*
1. Hacer

  i. Leer numberCard
2. Mientras (numberCard===undefined)

*Pseudocódigo de la función isValidCard*
1. Funcion isValidCard
  1. arrNumberReverse= numberCard.reverse();
  2. newArr=[];
  3. sum=0;
  4. sumDigit=0;

  5. Para i=0 Hasta n.length Con Paso 1 Hacer
    1. newArr[i]=(parseInt)arrNumberReverse[i];
  6. Fin de Para

  7. Para j=0 Hasta newArr.length Con Paso 1 Hacer
     1. Si (((j+1)%2)===0)
        1. Si (newArr[j]x2 >= 10)
            1. sumDigit=(trunc)newArr[j]x2)/10+ (newArr[j]x2)%10;
            2. sum+=sumDigit;
        2. Si no
            1. sum+=newArr[j]x2;
        3. Fin Si
    2. Si no
        1. sum+=newArr[j];
    3. Fin si
  8. Fin de Para
  9. Si(sum%2===0)
    1. Escribir 'Numero de tarjeta Valida';
  10. Si no
    1. Escribir 'Numero de tarjeta no Valida';
  11. Fin de Si
2. Fin Funcion
