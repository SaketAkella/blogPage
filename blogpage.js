backButton = document.getElementById("back");
homeButton = document.getElementById("home");
nextButton = document.getElementById("next");

var i=1;
function ready(){
    backButton.disabled = true;
}

function next() {
    i++;
    if (i ==5 ) {
      nextButton.disabled = true;
    }
    backButton.disabled = false;
  }

  function back() {
    i--;
    if (i == 1) {
      backButton.disabled = true;
    }
    nextButton.disabled = false;
  }
  
  