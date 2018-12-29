function findNearest(num, arr){
   
    for (let i=0; i<arr.length; i++){
        if (num <= arr[i]){
            return i
        }   
    }
}
console.log(findNearest(7, [1, 6, 7, 9, 13]))
console.log(findNearest(8, [1, 6, 7, 9, 13]))