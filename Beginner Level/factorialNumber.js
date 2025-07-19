const factorialNumber=5;
const factorial=(number)=>{
    if(number===1 || number ===0){
        return 1;
    }
    else{
        return number * factorial(number-1)
    }
}
console.log(factorial(factorialNumber));