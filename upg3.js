const myBody = document.querySelector("body");
let buttons= document.getElementsByTagName("button");
let body= document.getElementsByClassName("changecolor");

for(let i= 0; 1< buttons.length; i++){
 let button = buttons[i];
 let color;
 button.addEventListener("click", function() {
    color = buttons.className.toString();
    color = color.split("button")[0];
    body.style.color = color;
 }
 )
;
}
