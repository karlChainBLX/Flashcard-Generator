var clozeDeletion = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington"
    );

console.log(firstPresident.front); 
 
console.log(firstPresident.back); 
 
var firstPresidentCloze = new clozeDeletion (
"George Washington was the first president of the United States.", "George Washington");
console.log(firstPresidentCloze.cloze); 
console.log(firstPresidentCloze.partial);
console.log(firstPresidentCloze.fullText);
//var brokenCloze = new clozeCard("I like pizza", "tacos");

 //make flash cards
 