function scuberGreetingForFeet(feet){
  if (feet > 2500){
    return `No can do.`
  } if (feet > 2000){
    return 'I will gladly take your thirty bucks.'
  } if (feet <= 400){
    return `This one is on me!`
  }
}

function ternaryCheckCity(city){
  if (city === "NYC"){
    return "Ok, sounds good."
  } else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      return "Thank you so much.";
      break ;
    case 'not as generous':
    return "Thank you.";
    break;
    default:
      return "Bye."
  }
}
