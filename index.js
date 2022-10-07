for(var i=0; i<7; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    this.style.color="black";
   console.log(this.innerHTML)
   
//    var audio= new Audio('sounds/crash.mp3');
//     audio.play()
//     document.querySelector(".q").classList.add("pressed")
    //document.querySelector(".q").classList.remove("pressed")
});
}