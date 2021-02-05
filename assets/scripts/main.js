// main.js
/*
    volume-image
    volume-number
    volume-slider

    volume-level-3: 67-100
    volume-level-2: 34-66
    volume-level-1: 1-33
    volume-level-0: 0

    change audio: sound-image, horn-sound
    horn-btn
*/
// TODO

function updateSoundImage(volume) {
    let volumeImage = document.getElementById("volume-image");
    if (volume == 0) {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg"
    }
    else if (volume < 33) {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    }
    else if (volume < 67) {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    }
    else {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg"
    }
}


let volumeNumber = document.getElementById("volume-number");
var volumeSlider = document.getElementById("volume-slider");


volumeNumber.addEventListener('input', function() {
    let volume = volumeNumber.value;
    if (volume > 100) {
        volumeNumber.value = 100;
    }
    else if (volume < 0) {
        volumeNumber.value = 0;
    }
    volumeSlider.value = volume;
    updateSoundImage(volume);
});

volumeSlider.addEventListener("mousemove", function() {
    let volume = volumeSlider.value;
    volumeNumber.value = volumeSlider.value;
    updateSoundImage(volume);
})

let honkButton = document.getElementById("honk-btn");
honkButton.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('horn-sound').play();
});

let audioSelection = document.querySelectorAll("input[type=radio]");