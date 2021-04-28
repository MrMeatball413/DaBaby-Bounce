






const dabby = document.getElementById("dabby");
const cyanamonguscharacter = document.getElementById("cyanamonguscharacter");




 function jump() {
  if (dabby.classList != "jump") {
     dabby.classList.add("jump");

    setTimeout(function () {
        dabby.classList.remove("jump");
      }, 300);
    }
  }




let isAlive = setInterval(function() {
     //dino y position
     let dabbyTop = parseInt(window.getComputedStyle(dabby).getPropertyValue("top"));
     //amonguscharacter x position
     let cyanamonguscharacterLeft = parseInt(window.getComputedStyle(cyanamonguscharacter).getPropertyValue("left"));
     
    if (cyanamonguscharacterLeft <50 && cyanamonguscharacterLeft > 0 && dabbyTop >= 140){
 
       //collision

       alert("Game Over!");
    }
    
    } ,10);

document.addEventListener("keydown", function (event) {
  jump();
})

