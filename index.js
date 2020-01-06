// Code your solutions in this file
function writeCards(array, event){
    let thankYouMsgs = []
    for (let i = 0; i < array.length; i++){
       thankYouMsgs.pysh(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    console.log(thankYouMsgs)
}

function countDown(number){
    while(number <= 0){
        console.log(number);
        number =- 1
    }
}