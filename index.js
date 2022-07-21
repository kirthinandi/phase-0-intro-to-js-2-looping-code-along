// Code your solutions in this file
/* 

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}


const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);

*/
const guests = ["Guadalupe", "Ollie", "Aki"];
const eventName = "surprise";

function writeCards(guests, eventName) {
    let cards = [];
    for (let i = 0; i < guests.length; i++) {
        cards.push(`Thank you, ${guests[i]}, for the wonderful ${eventName} gift!`);
    }
    
    return cards;
}

writeCards(guests, eventName);

function countDown() {
    let x = 10;
    while (x >= 0) {
        console.log(x--);
    }
}
