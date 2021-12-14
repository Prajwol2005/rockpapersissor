

$(".play").click(function() {
  var computerInput = Math.random();
  let userInput = $("input").val();
    $(".userChoice").text(userInput);
     if (computerInput <= 0.33) {
       computerInput = "Rock"
     } else if (computerInput <= 0.66) {
        computerInput = "Paper"
     } else { 
       computerInput = "Sissor"
     } 
  $(".computerChoice").text(computerInput);
  
  if (userInput === computerInput) {
    $(".result").text("tie") } 
  else if (userInput === "Rock" && computerInput === "Paper" || userInput === "Paper" && computerInput === "Sissor" || userInput === "Sissor" && computerInput ==="Rock"){
    $(".result").text("You Lose!")
  } else {
    $(".result").text("You Win!")
  }
});
