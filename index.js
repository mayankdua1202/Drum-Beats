for(var i=0; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    music(this.innerHTML);
    animation(this.innerHTML);
  });
  document.querySelectorAll(".drum")[i].addEventListener("keydown", function(event){
    music(event.key);
    animation(event.key);
  });
}

function music(key) {
  var audioPath = "sounds/";
  switch (key){
      case "w" :  audioPath += "tom-1.mp3";
                  break;
      case "a" :  audioPath += "tom-2.mp3";
                  break;
      case "s" :  audioPath += "tom-3.mp3";
                  break;
      case "d" :  audioPath += "tom-4.mp3";
                  break;
      case "j" :  audioPath += "snare.mp3";
                  break;
      case "k" :  audioPath += "crash.mp3";
                  break;
      case "l" :  audioPath += "kick-bass.mp3";
                  break;
      default  :  audioPath += "crash.mp3";
    }
  var audio = new Audio(audioPath);
  audio.play();
};

function animation(key) {
  // console.log(key);
  if(key !== "w" && key !== "a" && key !== "s" && key !== "d" && key !== "j" && key !== "k" && key !== "l") {
      key = "k";
  }
  document.querySelector("." + key).classList.add("pressed");

  setTimeout(function() { 
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}
