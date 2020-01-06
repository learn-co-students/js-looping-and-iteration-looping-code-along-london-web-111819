let names = ["Ada", "Brendan", "Ali"];
let event = "birthday"

function writeCards(names, event){
    let arr = []
  for (let i = 0; i < names.length; i++) {
     arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);


    }
   return arr; 
}
writeCards(names, event);

function countDown(number) {
   while (number >= 0) {
    console.log(number--)
   }
}



