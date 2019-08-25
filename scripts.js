
//This function takes the age they put in and convert it to hours
function ageInhours() {
let hours = visitorAgeString * 365 * 24;
return hours
}


alert("this is an example of how javacript is used!");


// Example of making your website ineractive
let visitorName = prompt("What is your name?");
let visitorAgeString = parseInt(prompt("What is your age?"));
let ageComparison = visitorAgeString;



if (ageComparison > 22) {ageComparison = "You have more years in this world than I have at the age of 22, but im here to learn." }
else if (ageComparison <= 22) {ageComparison = "I'm 22 and you're already running circles around me, it's time for me to catch up." }
else if (ageComparison === 0) {ageComparison = "invalid age." }
else {ageComparison = "I dont know your age because you didnt enter a number."}



const output = document.getElementById('output');

output.textContent = `hello, ${visitorName}.I did the math and you are ${ageInhours()} hours old. ${ageComparison} Feel free to inspect my portfolio site. I've put all my entry level skills in Html, Css, and JavaScript into this site `;



const hello = "hello world"
