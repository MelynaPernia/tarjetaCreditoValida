
//creando una funcion
var isValidCard= function(numberCard){

  var arrNumberReverse= ((numberCard.toString()).split('')).reverse();
  var newArr=[];
  var sum=0;
  var sumDigit=0;


  for(var i=0;i<arrNumberReverse.length;i++) {
      newArr[i]=parseInt(arrNumberReverse[i]);

  }

  for(var j=0;j<newArr.length;j++){
    if((j+1)%2===0){
        if(newArr[j]*2>=10){
          sumDigit= Math.trunc((newArr[j]*2)/10)  + ((newArr[j]*2)%10);
          sum+=sumDigit;
        }else{
          sum+=newArr[j]*2;
        }

    }else{
      sum+=newArr[j];
    }

  }
  if(sum%10===0){
    alert( 'Numero de Tarjeta Valido');
  }else{
    alert('Numero de Tarjeta invalido');
  }
//  alert(message);


}
do{
  var numberCard=parseInt(prompt('Ingrese su tarjeta de credito'));
}while (numberCard===undefined)


isValidCard(numberCard);
/*
do{
//creando la variable numberCard para ingresar la tarjeta de credito
var numberCard=parseInt(prompt('Ingrese su tarjeta de credito'));
}while(numberCard===0)*/
