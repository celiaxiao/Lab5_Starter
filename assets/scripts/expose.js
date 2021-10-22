// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horn_selector = document.getElementById("horn-select");
  const horn_image = document.querySelector('section>img');
  const horn_audio = document.querySelector('.hidden');
  horn_selector.addEventListener('change', (event) => {
    // console.log("assets/images/" + event.target.value + ".svg")
    horn_image.src = "assets/images/" + event.target.value + ".svg"
    // console.log(horn_audio)
    horn_audio.src = "assets/audio/" + event.target.value + ".mp3"
  });

  const slider = document.getElementById("volume")
  const volIcon = document.querySelector("div>img")
  slider.addEventListener('change', (event) => {
    const currRange = event.target.value
    if (currRange == 0) {
      volIcon.src = "assets/icons/volume-level-0.svg"
    } else if (currRange > 0 && currRange < 33) {
      volIcon.src = "assets/icons/volume-level-1.svg"
    } else if (currRange > 32 && currRange < 67) {
      volIcon.src = "assets/icons/volume-level-2.svg"
    } else {
      volIcon.src = "assets/icons/volume-level-3.svg"
    }
    horn_audio.volume = currRange / 100.0
  });

  const play_button = document.querySelector("button")
  play_button.addEventListener('click', () => {
    horn_audio.play();
    if (horn_selector.value == "party-horn") {
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti()
    }
  })
}