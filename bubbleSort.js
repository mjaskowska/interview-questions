const arr = [1, 54, 3123, 2, 4242, 5]

let swapped;

const bubbleSort = (array) => {
    let end = array.length

for (let j=0; j<end; j++){
    for (let i =0; i<end; i++){
        if(array[i]> array[i+1]){
            // let temp = arr[i]
            // arr[i] = arr[i+1]
            // arr[i+1 ] = temp  
            // OR:
            [arr[i], arr[i+1]]=[arr[i+1], arr[i]]
        }
    }
}
   return array
    
}



console.log(bubbleSort(arr))