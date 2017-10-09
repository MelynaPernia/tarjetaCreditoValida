
//creando una funcion
var isValidCard= function(numberCard){

  var arrNumberReverse= ((numberCard.toString()).split('')).reverse();
  var newarr=[];
  var sum=0;
  var sumDigit=0;

  for(var i=0;i<arrNumberReverse.length;i++) {
      newarr[i]=parseInt(arrNumberReverse[i]);
  }

  for(var j=0;j<newarr.length;j++){
    if((j+1)%2===0){
        if(newarr[j]*2>=10){
          sumDigit= Math.trunc((newarr[j]*2)/10)  + ((newarr[j]*2)%10);
          sum+=sumDigit;
        }else{
          sum+=newarr[j]*2;
        }

    }else{
      sum+=newarr[j];
    }

  }
  if(sum===40){
    alert( 'Numero Valido');
  }else{
    alert('Numero invalido');
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
