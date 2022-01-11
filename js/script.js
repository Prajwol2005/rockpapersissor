let youWin =
  "https://techcrunch.com/wp-content/uploads/2013/09/excited-adventure-time.gif";
let youLose = "https://media4.giphy.com/media/eJ4j2VnYOZU8qJU3Py/giphy.gif";
let tryAgain =
  "https://64.media.tumblr.com/8954ac6ab496bd3036d8a41f8ba1808d/tumblr_okwujdIOpv1w3ijdno1_400.gifv";
let tie = "https://media2.giphy.com/media/3ohrysKImgiyrEZJzq/200.gif";

function getPlayerChoice() {
  var userInput = $("input").val();
  $(".userChoice").text(userInput);
  return userInput;
}

function getComputerChoice() {
  var computerInput = Math.random();
  if (computerInput <= 0.33) {
    computerInput = "Rock";
  } else if (computerInput <= 0.66) {
    computerInput = "Paper";
  } else {
    computerInput = "Scissor";
  }
  $(".computerChoice").text(computerInput);
  return computerInput;
}

$(".play").click(function () {
  let computerInput = getComputerChoice().toLowerCase();
  let userInput = getPlayerChoice().toLowerCase();
  if (userInput === computerInput) {
    $(".result").text("tie");
    rPK(tie);
  } else if (
    (userInput === "rock" && computerInput === "paper") ||
    (userInput === "paper" && computerInput === "scissor") ||
    (userInput === "scissor" && computerInput === "rock")
  ) {
    $(".result").text("You Lose!");
    rPK(youLose);
  } else if (
    (computerInput === "rock" && userInput === "paper") ||
    (computerInput === "paper" && userInput === "scissor") ||
    (computerInput === "scissor" && userInput === "rock")
  ) {
    $(".result").text("You Win!");
    rPK(youWin);
  } else {
    $(".result").text("Try Again");
    rPK(tryAgain);
  }
});

function rPK(img) {
  $(".resultTwo").html(`<img src='${img}'>`);
}
