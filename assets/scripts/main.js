// main.js

function updateVolumeImage(volume) {
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

let volume = 100;
let volumeNumber = document.getElementById("volume-number");
volumeNumber.addEventListener('input', function() {
    volume = volumeNumber.value;
    if (volume > 100) {
        volumeNumber.value = 100;
    }
    else if (volume <= 0) {
        volumeNumber.value = 0;
        honkButton.disabled = true;
    }
    else {
        honkButton.disabled = false;
    }
    volumeSlider.value = volume;
    updateVolumeImage(volume);
});

let volumeSlider = document.getElementById("volume-slider");
volumeSlider.addEventListener("mousemove", function() {
    volume = volumeSlider.value;
    (volume == 0) ? honkButton.disabled = true : honkButton.disabled = false;
    volumeNumber.value = volumeSlider.value;
    updateVolumeImage(volume);
})

let honkButton = document.getElementById("honk-btn");
honkButton.addEventListener('click', function(e) {
    e.preventDefault();
    let honkButton = document.getElementById('horn-sound')
    honkButton.volume = volume / 100;
    honkButton.play();
});

let audioSelection = document.querySelectorAll("input[type=radio]");
audioSelection.forEach(function(btn) {
    btn.addEventListener('click', () => {
        let hornType = btn.id.replace('radio-','');
        document.getElementById('sound-image').src = `./assets/media/images/${hornType}.svg`;
        document.getElementById('horn-sound').src = `./assets/media/audio/${hornType}.mp3`;
    })
})