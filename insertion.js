var cat=["p","n","e","u","m","o","n","o","u","l","t","r","a","m","i","c","r","o","s","c","o","p","i","c","s","i","l","i","c","o","v","o","l","c","a","n","o","c","o","n","i","o","s","i","s"]

var array2 = []
var array3 = []

function toAscii(array) {
    for (i = 0; i < array.length; i++) {
        array2.push(parseInt(array[i].codePointAt()))

    }
    console.log(array2)
}
toAscii(cat)

function Sorting(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
    
}
Sorting(array2)

function toLetter(array) {
    for (i = 0; i < array.length; i++) {
        var arrrayy=parseInt(array[i])
        array3.push(String.fromCharCode(arrrayy))

    }
    console.log(array3)
}
toLetter(array2)