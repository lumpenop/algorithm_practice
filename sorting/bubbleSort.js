let arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];


let b = 0;
let len = arr.length
for(var i=0; i<arr.length-1; i++){

    for(var j=0; j<len-1; j++){
        if(arr[j]>arr[j+1]){
            b = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = b;
        }
    }
    len--;
}
console.log(arr);