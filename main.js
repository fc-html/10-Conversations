const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");

const audioContext = new AudioContext();

const audioElement = new Audio(URL.createObjectURL(recordedAudio));
audioElement.crossOrigin = "anonymous";

function handleAudiofiles(fileOrBlob) {
    const objectURL = URL.createObjectURL(fileOrBlob);
    audioElement.src =objectURL;
    const source = audioContext.createMediaElementSource(audioElement);

    function playAudio() {
        if (audioContext.state === "suspended") {
            audioContext.resume();
        }
        audioElement.play();
    }

    function pauseAudio() {
        audioElement.pause();
    }

    playButton.addEventListener("click", playAudio);
    pauseButton.addEventListener("click", pauseAudio);
}







const source = audioContext.createMediaElementSource(audio);

source.connect(audioContext.destination);

playButton.addEventListener("click", () => {
    audio.play()
});

pauseButton.addEventListener("click", () => {
    audio.pause
});



//reverb thing 


// end reverb thing


import Tuna from 'tunajs';
const context = new AudioContext();
const tuna = new Tuna(audioContext);

var chorus = new tuna.Chorus({
    rate: 1.5,
    feedback: 0.2,
    delay: 0.0045,
    bypass: false
});
// Create regular Web Audio nodes
var input = context.createGain();
var output = context.createGain();

// Use the Tuna node just like regular nodes
input.connect(chorus);
chorus.connect(output);


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
};

// drag and drop

