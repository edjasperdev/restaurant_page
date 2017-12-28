var modal = document.getElementById('myModal');

var btn = document.getElementById("signupButton");

var span = document.getElementsByClassName("modalClose")[0];

btn.onclick = function() {
    modal.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

document.getElementById ("submitButton").onclick = function() {
	alert("Thank you for your subscription!");

	modal
}

}

       
       

	