const buttons = document.querySelectorAll(".key");

buttons.forEach(button => button.addEventListener("click", pressed));

function pressed() {
	document.getElementById("display").style.visibility = "hidden";
}

if (pressed == true){
	document.getElementById("login").style.visibility = "visible";
} else{
	return(0);
};