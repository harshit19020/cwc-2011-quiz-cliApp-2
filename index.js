var readlineSync = require("readline-sync");

var score = 0;

var ans;

var question = [
  {
    q : "do you know who was not out with yuvraj sing in cwc 2011 quarter final  ",
    a : "suresh raina"
  },
  {
    q : "which date india won world cup 2011  ",
    a : "2 april"
  },
  {
    q : "2011 wc was the last world cup of which cricketer  ",
    a : "sachin tendulkar"
  },
  {
    q : "who was the captain of india  ",
    a : "ms dhoni"
  }];

  function welcome(){
    var userName = readlineSync.question("What's your name? ");
    console.log("Welcome "+ userName);
    ans = readlineSync.question("DO YOU KNOW about cwc 2011? yes or no --> ");
  }

  function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
    console.log("the correct answer was "+ answer);
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  if(ans === "yes"){
    for (var i=0; i<question.length; i++) {
      var currentQuestion = question[i];
      play(currentQuestion.q, currentQuestion.a)
    }
  }
  else{
    console.log("then you will not be able to play");
  }
}

welcome();
game();
console.log("the final score is "+ score);