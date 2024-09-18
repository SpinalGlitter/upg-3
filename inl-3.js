const changeTextBtn = document.querySelector("button");
const text = document.querySelector("h1");


changeTextBtn.addEventListener("click", function (){
    

    if (text.innerHTML=="Hello World!") {
        text.innerHTML = "Goodbye World!";
    }
    else {
        text.innerHTML = "Hello World!"
       }
});











