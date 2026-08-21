document.getElementById("applyForm").addEventListener("submit", function(e){

e.preventDefault();

let popup = document.getElementById("popup");

popup.style.display="block";

setTimeout(function(){
popup.style.display="none";
},4000);

this.reset();

});