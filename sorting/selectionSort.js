
let arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];


for(var i=0; i<arr.length-1; i++){
    let b = 0;
    let min = arr[i];
    let ind = i;
    
    console.log(min)
    for(var j=i+1; j<arr.length; j++){
        if (min > arr[j]){
            min = arr[j];
            ind = j;
        
        }
    }

    b = arr[i];
    arr[i] = min;
    arr[ind] = b;
}
console.log(arr);
