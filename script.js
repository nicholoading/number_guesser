var checkButton = document.getElementById("check");
var restartButton = document.getElementById("Restart");

checkButton.addEventListener('click', function() {
  
  let randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
  let numberEntered = document.getElementById("numberEntered").value;
  let result = document.getElementById('result');

  let x = parseInt(numberEntered);
  if (x > randomNumber) {
    result.innerHTML = "You Lose! Number Too High"
  } else if (x < randomNumber) {
    result.innerHTML = "You Lose! Number Too Low"
  } else if ( x === randomNumber) {
    result.innerHTML = "You Won!"
  }

  let history = document.getElementById('history');
  history.innerHTML += `<li>You Guessed ${numberEntered}</li>`

});

restartButton.addEventListener('click', function() {
  document.getElementById("numberEntered").value = ""; 
  document.getElementById('history').innerHTML = "";

})