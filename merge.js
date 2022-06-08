var cat = ["p","n","e","u","m","o","n","o","u","l","t","r","a","m","i","c","r","o","s","c","o","p","i","c","s","i","l","i","c","o","v","o","l","c","a","n","o","c","o","n","i","o","s","i","s"]
console.log(String.fromCharCode(99))

var array2 = []
var array3 = []
var sortedArr = [];
function toAscii(array) {
    for (i = 0; i < array.length; i++) {
        array2.push(parseInt(array[i].codePointAt()))
        if(i==array.length-1){
            
        }
    }
    alert(array2)
    
   
}
toAscii(cat)

function toLetter(array) {
    for (i = 0; i < array.length; i++) {
        array3.push(String.fromCharCode(array[i]))
        if(i==array.length-1){
            console.log(array3)
        }

    }
    
}


const merge = (arr1, arr2) => {
    let sorted = [];
  
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
      else sorted.push(arr2.shift());
    };
  
    return sorted.concat(arr1.slice().concat(arr2.slice()));
    
    
    
  };
  


const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid));
  
    return merge(left, right); 
    
  };
  var array4=mergeSort(array2)
  console.log(mergeSort(array2),toLetter(array4));
  
  

 