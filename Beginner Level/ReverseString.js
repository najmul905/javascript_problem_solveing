// using Reverse method
const ReverseString=(data)=>{
    return data.split("").reverse().join("")
}
console.log(ReverseString("Hello World"))

// using for loop
const ReverseStringForLoop = (data) => {
    let reversed="";
    for(let i=data.length-1; i>=0; i--){
        reversed=reversed + data[i];
    }
    return reversed;
}
console.log(ReverseStringForLoop("Hello world with for"))