// var word=["p","n","e","u","m","o","n","o","u","l","t","r","a","m","i","c","r","o","s","c","o","p","i","c","s","i","l","i","c","o","v","o","l","c","a","n","o","c","o","n","i","o","s","i","s"]
var array=["c","a","t"]


    alert("sih")
    for(i=0;i<26;i++){
        if(array[i]=="a"){
            array.splice(i,0,1)
        }
        if(array[i]=="b"){
            array.splice(i,0,2)
        }
        if(array[i]=="c"){
            array.splice(i,0,3)
        }
        if(array[i]=="t"){
            array.splice(i,0,4)
        }
    }
    console.log(array)
