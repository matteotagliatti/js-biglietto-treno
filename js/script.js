const kmToGo = parseInt(prompt("How many km do you have to travel?"));
if (isNaN(kmToGo)) {
  alert("Choose a number fool!");
  throw new Error("Choose a number!");
}

const passengerAge = parseInt(prompt("What is your age?"));
if (isNaN(passengerAge)) {
  alert("Choose a number fool!");
  throw new Error("Choose a number!");
}

let ticketCost = 0.21 * kmToGo;
let message = "";

if (passengerAge < 18) {
  ticketCost = ticketCost - ticketCost * 0.3; // 30% discount
  message = "30% discount applied because you are underage";
} else if (passengerAge > 65) {
  ticketCost = ticketCost - ticketCost * 0.65; // 65% discount
  message = "65% discount applied because you are reeeeeeally old 😜";
}

ticketCost = ticketCost.toFixed(2); // 2 decimals

document.getElementById("kmtogo").innerHTML = kmToGo;
document.getElementById("passengerage").innerHTML = passengerAge;
document.getElementById("price").innerHTML = ticketCost;
document.getElementById("message").innerHTML = message;
