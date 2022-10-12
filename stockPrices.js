function bestReturn(array) {
    let diffArray = []

    let i = 0
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] < array[j]) {
            diffArray.push(array[j] - array[i])
        } else {
            i = j
        }
    }

    // console.log(array)
    // console.log(diffArray)

    //Return largest number from the new array minus the smallest
    return Math.max(...diffArray)
}

function randArray(min, max, arrayLength) {
    const array = []
    for (let i = 0; i < arrayLength; i++) {
        array.push(Math.floor(Math.random() * (max + 1 - min) + min))
    }
    return array
}

console.log(bestReturn(randArray(0, 100, 100)))

// console.log(randArray(0, 100, 100))

// function randomNums(min, max, arrayLength) {
//     const array = []
//     for (let i = 0; i < arrayLength; i++) {
//         let randNum = Math.random()
//         console.log(randNum)
//         console.log(Math.floor(randNum * (max + 1 - min) + min))
//     }
//     return array
// }