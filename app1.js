let arr = [2, 5, 1, 8, 12, 3];

function bubbleSort(arr){
    for (let i=0; i< arr.length; i++){
        for (let j=0; j< arr.length - i -1; j++){
            if (arr[j]>arr[j+1]){
                let position = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = position;
            }
        }
    }return arr

}
console.log(bubbleSort(arr));