// Code your solutions in this file

function writeCards(arr, word) {
    let empty = []
    for(let i = 0; i < arr.length; i++) {
        empty.push(`Thank you, ${arr[i]}, for the wonderful ${word} gift!`)
    }
    return empty
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num -= 1
    }
}