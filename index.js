let player = document.getElementById("player");
let box = document.getElementById("box");
let scoreEl = document.getElementById("score");
let score = 0;


//keyPressChecker
window.addEventListener("keydown",(e)=>{
  if(e.code == 'Space'){
    playerJump();
  }
  if(e.code == 'Enter'){
    location.reload();
  }
})

function playerJump(){

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
  
  if(playerBottom <= 25 && (boxRight >= 600 && boxRight <= 650)){

    clearInterval(scoreInterval);
    box.style.animation = "none";
    box.style.display = "none";
    alert("You Lose!");
  }
},10);



let scoreInterval = setInterval(updateScore,200);

function updateScore(){
  score++;
  scoreEl.innerHTML = score;
}



//AUTOJUMP
// let autoJump = setInterval(function(){
//   console.log("Inside Auto Jump");
//   let boxRight = parseInt(window.getComputedStyle(box).getPropertyValue("right"));

//   if(boxRight >= 550){
//     playerJump();
//   } 
// },20);
