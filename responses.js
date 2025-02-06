function getBotResponse(input) {

  //rock paper scissors
  if (input == "rock") {
    return "paper";
  } else if (input == "paper") {
    return "scissors";
  } else if (input == "scissors") {
    return "rock";
  }

  // Simple responses
  if (input == "I Love you",){
    return "(I love you too uma) 💝";
  } else if (input == "What is my name ") {
    return "Hello your name is Uma nice to and it is very nice meeting you ";
  } else if (input == "what are you doing") {
    return "Im gald you asked! Currently, I am just chilling. Yep, my favorit hobby =  nothing till you command me ";
  }else if (input == "What is your name ") {
  return "my name is riya i am a bot till you command me ";
}

  //Greetings and Farerell
  if (input == "Hello ") {
    return "Hello Uma";
  } else if (input == "Good bye ") {
    return "Ill miss you , farewell Riya";

    //Telling Time
  } else if (input == "what time is it ") {
    return getTime() + " Sweety 😊";

    //One word responses
  } else if (input == "Good ") {
    return "alright then";
  } else if (input == "Thank you ") {
    return "😄 no prob";
  } else if (input == "Nice ") {
    return "😶‍🌫️👍";
  }
  if (input == "sorry") {
    var appology = ["Its okay 😁", " I forgive you", "Thank You", "Don't worry about it", "it happens", "its fine"];
    var randomR = appology[Math.floor(Math.random() * appology.length)];
    return randomR;
    //Opening stuff
  } else if (input == "play music") {
    return "okay uwu=" + ~~window.open("https://open.spotify.com/playlist/012GSIqUOoikRrFa4wTW3T");
  } else if (input == "open youtube") {
    return " ^_^ done senpai └(^o^)┘--ya " + window.open("https://youtube.com");
  } else {
    var feedback = ["Why can't I understand?", "hi", "Umm...", "...", "?"];
    var rfeedback = feedback[Math.floor(Math.random() * feedback.length)];
    return rfeedback;
    //feedback
  }
}