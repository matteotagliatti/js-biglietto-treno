const kmToGo = parseInt(prompt("How many km do you have to travel?"));
const passengerAge = parseInt(prompt("What is your age?"));

let ticketCost = 0.21 * kmToGo;

if (passengerAge <= 18) {
  ticketCost = ticketCost - ticketCost * 0.3; // 30% discount
} else if (passengerAge >= 65) {
  ticketCost = ticketCost - ticketCost * 0.65; // 65% discount
}

ticketCost = ticketCost.toFixed(2); // 2 decimals

document.getElementById("kmtogo").innerHTML = kmToGo;
document.getElementById("passengerage").innerHTML = passengerAge;
document.getElementById("price").innerHTML = ticketCost;
