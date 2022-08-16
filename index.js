function scuberGreetingForFeet(ride){
  let newRide = parseInt(ride, 10);
  if (newRide <= 400) {
    return "This one is on me!";
  } else if (newRide >= 2500) {
    return "No can do.";
  } else if (newRide >= 2000) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "It's not working";
  }
}

function ternaryCheckCity(city){
  if (city === "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  if (tip === "generous") {
    return "Thank you so much."
  } else if (tip === "not as generous"){
    return "Thank you."
  } else {
    return "Bye.";
  }
}