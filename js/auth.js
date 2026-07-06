const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

if(email==="admin@example.com" && password==="admin123"){

localStorage.setItem("loggedIn","true");

window.location.href="dashboard.html";

}else{

alert("Invalid Email or Password");

}

});
