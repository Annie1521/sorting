var cat = ["p", "n", "e", "u", "m", "o", "n", "o", "u", "l", "t", "r", "a", "m", "i", "c", "r", "o", "s", "c", "o", "p", "i", "c", "s", "i", "l", "i", "c", "o", "v", "o", "l", "c", "a", "n", "o", "c", "o", "n", "i", "o", "s", "i", "s"]
// var cat = ["c", "a", "t"]
console.log(String.fromCharCode(99))

var array2 = []
var array3 = []
function toAscii(array) {
    for (i = 0; i < array.length; i++) {
        array2.push(parseInt(array[i].codePointAt()))

    }

}
toAscii(cat)



function SortingLetters(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let arrayyy = array[j];
                array[j] = array[j + 1];
                array[j + 1] = arrayyy;
            }
        }
    }
    console.log(array);
}
// }
SortingLetters(cat)

function toLetter(array) {
    for (i = 0; i < array.length; i++) {
        array3.push(String.fromCharCode(array))

    }

}
toLetter(array2)