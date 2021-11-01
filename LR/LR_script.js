var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function welcome_message(){
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  maxLength = 3;
  for (var i = 0; i < maxLength; i++) {
      for (var j = 0; j < 2; j++) {
          tmp = 'cell' + i + j;
          document.getElementById(tmp).innerHTML = randomnum();
        }
  }
}


function randomnum(){
  return Math.floor(Math.random() * 10000 + 1);
}
