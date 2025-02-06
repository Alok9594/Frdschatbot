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
  if (input == "I Love you uma ") {
    return "(interally screams) 😖";
  } else if (input == "what is your name") {
    return "Hello my name is Nella nice to and it is very nice meeting you ";
  } else if (input == "what are you doing") {
    return "Im gald you asked! Currently, I am just chilling. Yep, my favorit hobby =  nothing till you command me ";
  }

  //Greetings and Farerell
  if (input == "hello") {
    return "Hello Senpai!!";
  } else if (input == "goodbye") {
    return "Ill miss you , farewell Senpai";

    //Telling Time
  } else if (input == "what time is it") {
    return getTime() + " Sweety 😊";

    //One word responses
  } else if (input == "good") {
    return "alright then";
  } else if (input == "thank you") {
    return "😄 no prob";
  } else if (input == "nice") {
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
    var feedback = ["Why can't I understand you?", "HUM?", "Umm...", "...", "?"];
    var rfeedback = feedback[Math.floor(Math.random() * feedback.length)];
    return rfeedback;
    //feedback
  }
}