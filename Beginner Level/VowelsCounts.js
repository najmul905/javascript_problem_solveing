const sentence = "This is a test sentence";
const vowels = "aeiouAEIOU";
const countVowels = (sentence) => {
    let count = 0;
    for (let char of sentence) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels(sentence)); 