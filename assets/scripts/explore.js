// explore.js
// Code reference from MDN

window.addEventListener('DOMContentLoaded', init);
var synth = window.speechSynthesis;
const voice_choices = document.querySelector("select");
const button = document.querySelector("button");
const text_area = document.querySelector("textarea");
const image = document.querySelector("img");
var voices = [];

function init() {
  // TODO
  setTimeout(() => {
    voices = synth.getVoices();
    // console.log(voices);
  
    for(var i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voice_choices.appendChild(option);

    }
  }, 100);
  
  button.addEventListener("click", () => {
    var utterThis = new SpeechSynthesisUtterance(text_area.value);
    var selectedOption = voice_choices.selectedOptions[0].getAttribute('data-name');
    for(var i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    image.src = "assets/images/smiling-open.png";
    synth.cancel();
    synth.speak(utterThis);
    utterThis.onend = () => {
      image.src = "assets/images/smiling.png";
    }
  })
  

}