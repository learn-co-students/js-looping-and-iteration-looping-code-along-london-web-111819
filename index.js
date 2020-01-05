
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//   }

// const gifts = ["teddy bear", "drone", "doll"];
 
// wrapGifts(gifts);

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
//   return gifts;
}

// input = [["Ada", "Brendan", "Ali"], "birthday"]
// writeCards(input);
function writeCards(input){
    for (let i = 0; i < input[0].length; i++) {
        console.log(`Thank you ${input[0][i]}, for the wonderful ${input[1]} gift!`);
    }
    return input;
} 

// countDown(10);

function countDown(input){
    while (input > -1 ){
        console.log(`${input}`);
        input--;
    }
}