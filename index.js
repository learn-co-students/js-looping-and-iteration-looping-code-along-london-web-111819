
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
function writeCards(input_names_array,reason){
    let message = '';
    let output_array =[];
    for (let i = 0; i < input_names_array.length; i++) {
        message = `Thank you, ${input_names_array[i]}, for the wonderful ${reason} gift!`;
        output_array.push(message);
    }
    return output_array;
} 

// countDown(10);

function countDown(input){
    while (input > 0 ){
        console.log(input);
        input -=1 ;
    }
    console.log(input);
}