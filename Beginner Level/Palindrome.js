const isPalindrome = (data) => {
    const reversedStr = data.split('').reverse().join('');
    if(data===reversedStr){
        return true;
    }
    return false;
}
console.log(isPalindrome("madam"));