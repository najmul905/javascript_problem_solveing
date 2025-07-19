// find max number using for loop
const FindMazNumber=(data)=>{
    let MaxNumber=data[0];
    for (let i=1; i<data.length; i++){
        if(data[i]>MaxNumber){
            MaxNumber=data[i]
        }
    
    }
    return MaxNumber;
}
console.log(FindMazNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// using Math.max method
const arr=[40,23,32,534,23,535,53]
const MaxNumber=(data)=>{
    return Math.max(...data);
}
console.log(MaxNumber(arr))