var bgSound = document.getElementById("bgSound");
bgSound.volume = 0.1;

// var buttonNumber = document.getElementById("buttonNumber");
// buttonNumber.volume = 1;

const teclasDisplay = document.querySelectorAll(".buttons-style");

const tecla = teclasDisplay;

tecla.onclick = function (event) {
	toca(teclasDisplay);
}

console.log(teclasDisplay)