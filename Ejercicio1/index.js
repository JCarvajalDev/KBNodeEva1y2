function sumar2(a,b){
    return a+b;
}

function sumarN(){   
    let numbers = Array.from(arguments);
    let sum=0;

    numbers.forEach(num=>sum+=num);
        return sum;
    
}



function restar2(a,b){
    return a-b;
}

function restarN(){
    let numbers = Array.from(arguments);
    let sum=0;

    numbers.forEach(num=>sum-=num);
        return sum;
    
}


function multiplicar2(a,b){
    return a*b;
}

function multiplicarN(){
    let numbers = Array.from(arguments);
    let resultado = 1;

    numbers.forEach(num=>resultado *= num);
        return resultado;
    
}



function dividir2(a,b){

    if(b!=0){
        return a/b;
    }else{
        return "No se puede dividir por 0";
    }
    
}

function dividirN(){
  
    let numbers = Array.from(arguments);
    let resultado = numbers[0];
    for (let i = 1; i < numbers.length; i++) {

        if(numbers[i]!=0){
            resultado /= numbers[i];
        }else{
            return "No se puede dividir por 0";
        }
        
    }
    return resultado;

}



console.log("Sumar 2 numeros", sumar2(10,6));
console.log("Sumar N numeros", sumarN(10,5,6));
console.log("Restar 2 numeros", restar2(10,6));
console.log("Restar N numeros", restarN(10,5,6));
console.log("Multiplicar 2 numeros", multiplicar2(10,6));
console.log("Multiplicar N numeros", multiplicarN(10,5,6));
console.log("Dividir 2 numeros", dividir2(10,6));
console.log("Dividir N numeros", dividirN(10,5,6));

