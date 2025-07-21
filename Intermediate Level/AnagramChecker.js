function isAnagramSort(str1, str2) {
    // Process strings: remove spaces and make lowercase
    const processedStr1 = str1.replace(/\s/g, '').toLowerCase();
    const processedStr2 = str2.replace(/\s/g, '').toLowerCase();
    
    // If lengths are different, they can't be anagrams
    if (processedStr1.length !== processedStr2.length) {
        return false;
    }
    
    // Sort and compare
    return processedStr1.split('').sort().join('') === processedStr2.split('').sort().join('');
}
console.log(isAnagramSort("Hello", "World"))
