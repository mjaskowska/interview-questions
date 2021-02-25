const merge = (leftArr, rightArr) => {
    const sorted = []
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length ) {
        const leftEl = leftArr[leftIndex]
        const rightEl = rightArr[rightIndex]

        if (leftEl < rightEl) {
            sorted.push(leftEl)
            leftIndex++
        }
        else {
            sorted.push(rightEl)
            rightIndex++
        }
    }
    return [...sorted, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

const mergeSort = (arr) => {
    if(arr.length <= 1){return arr}

    let mid = Math.floor(arr.length /2)
    let left = (arr.slice(0, mid))
    let right = (arr.slice(mid))
 
    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([4, 6, 2, 76, 3, 15, 87]))