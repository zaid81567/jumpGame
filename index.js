let player = document.getElementById("player");
let box = document.getElementById("box");

function playerJump(){
  console.log("Inside Player Jump")
  if(player.classList != "animate"){
     player.classList.add("animate");
  }
  
  setTimeout(function(){
    player.classList.remove("animate");
  } , 500);
  
}

let isDead = setInterval(function(){
  let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
  let boxRight = parseInt(window.getComputedStyle(box).getPropertyValue("right"));
  
  if(playerBottom <= 25 && (boxRight >= 650 && boxRight <= 700)){
    box.style.animation = "none";
    box.style.display = "none";
    alert("You Lose!");
    
  }
},10);

//AUTOJUMP
/*let autoJump = setInterval(function(){
  console.log("Inside Auto Jump");
  let boxRight = parseInt(window.getComputedStyle(box).getPropertyValue("right"));

  if(boxRight >= 600){
    playerJump();
  } 
},20);*/
