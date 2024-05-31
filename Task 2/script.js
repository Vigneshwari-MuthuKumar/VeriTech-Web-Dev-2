function submitForm(){
    alert("Your Details has been submitted successfully. Thanks!");
    location.reload();
}
function buy(){
    window.open("https://pay.google.com/");
}
function whatsapp(){
     window.open("https://web.whatsapp.com/");
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
