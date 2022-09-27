var randomNum1 = Math.floor(Math.random()*6)+1;

var randomimg1 = "images/dice" + randomNum1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomimg1);

var randomNum2 = Math.floor(Math.random()*6)+1;

var randomimg2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimg2);

if (randomNum1 > randomNum2) {
    document.querySelector("h2").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNum2 > randomNum1) {
    document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h2").innerHTML = "Draw!...play again";
  }
  