console.log("JS's working!");

function soundOn() {
    let soundPlay = document.getElementById("soundSong");
    let soundLogo = document.getElementById("soundLogo");

    if (soundPlay.paused) {
        currentSound = soundPlay.play();
        soundLogo.src = "img/soundOn.svg";
    } else {
        soundPlay.pause();
        soundLogo.src = "img/soundOff.svg";
    }

    return currentSound;

}