#### Pseudocódigo del programa tarjeta de crédito válida.
*Pseudocodigo para ingresar*
1. Hacer
  2. Leer numberCard
3. Mientras (numberCard===undefined)

*Pseudocódigo de la función isValidCard*
1. Funcion isValidCard
  2. arrNumberReverse= numberCard.reverse();
  3. newArr=[];
  4. sum=0;
  5. sumDigit=0;

  6. Para i=0 Hasta n.length Con Paso 1 Hacer
    7. newArr[i]=(parseInt)arrNumberReverse[i];
  8. Fin de Para

  9. Para j=0 Hasta newArr.length Con Paso 1 Hacer
    10. Si (((j+1)%2)===0)
        11. Si (newArr[j]x2 >= 10)
            12. sumDigit=(trunc)newArr[j]x2)/10+ (newArr[j]x2)%10;
            13. sum+=sumDigit;
        14. Si no
            15. sum+=newArr[j]x2;
        16. Fin Si
      17. Si no
        18. sum+=newArr[j];
    19. Fin si
  20. Fin de Para
  21. Si(sum%2===0)
    22. Escribir 'Numero de tarjeta Valida';
  23. Si no
    24. Escribir 'Numero de tarjeta no Valida';
  25. Fin de Si
21. Fin Funcion
