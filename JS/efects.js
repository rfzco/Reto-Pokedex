      // --Transtion Efect--  

var case_2_back = document.getElementById("case2");
var case_2_front = document.getElementById("case1")
let opencase = document.getElementById("opencase"); 


opencase.onclick = getClass; 
    
  function getClass(evento) {
    // alert("Evento onclick ejecutado!");
    console.log("la clase en flipped")
    case_2_back.classList.add("flipped");
    case_2_front.classList.add("flipped");
  }


      // -- Open Audio Efect
   
let open_audio = document.querySelector("audio")

  opencase.addEventListener("click", () => {
    open_audio.setAttribute("src", "../multimedia/Pokédex Entry.mp3")
    open_audio.play();
    console.log(`Reproduciendo: ${open_audio.src}`)
})


      // -- Audio Buttom Efect --

var on_music = document.getElementById("on-music");      

let audio = document.getElementById("audio-boddy");

      on_music.addEventListener("click", () => {
        audio.setAttribute("src", "../multimedia/Pokémon Anime Sound.mp3");
        audio.play();
        console.log(`Reproduciendo: ${audio.src}`)
    })




       // - Pause Audio Buttom Efect -
   var sound = false;

       on_music.addEventListener("click", function(){
         if (!sound) {
          audio.play();
          sound = true;
          } else {
           audio.pause();
           sound = false;
          } 
        });

        // -- Power Pokedex Efect --

    let power = document.getElementById('power')
    var  powered = document.getElementById('prueba');  
    
    var counterVal = 0;

    function incrementClick() {
        updateDisplay= ++counterVal;
        console.log(updateDisplay)
    }
 
power.addEventListener('click',()=>{

  if (updateDisplay%2) {
    
      div = document.getElementById('prueba');
      div.style.visibility = 'visible';
    
  } else {
    
      div = document.getElementById('prueba');
      div.style.visibility = 'hidden';
  
  }
})
   

  


   