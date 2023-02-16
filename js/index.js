import Sound from "./sounds.js"
import Element from "./elements.js";
import {
    updateDisplay,
    moreFiveMinutes,
    minusFiveMinutes
}
    from "./functions.js";


let pauseTimeOut
const sound = Sound()
const element = Element()

function countdown() {
    pauseTimeOut = setTimeout(() => {
        let seconds = Number(element.secondsDisplay.textContent)
        let minuts = Number(element.minutsDisplay.textContent)

        updateDisplay(minuts, 0)

        if (minuts <= 0) {
            return
        }
        if (seconds <= 0) {
            seconds = 60
            --minuts
        }

        updateDisplay(minuts, String(seconds - 1))

        countdown()
    }, 1000);

}

element.buttonPlay.onclick = () => {
    countdown()
    sound.pressAudio()
}

element.buttonPause.onclick = () => {
    clearTimeout(pauseTimeOut)
    sound.pressAudio()
}

element.buttonMoreMinuts.onclick = () => {
    moreFiveMinutes()
    sound.pressAudio()
}

element.buttonMinusMinuts.onclick = () => {
    minusFiveMinutes()
    sound.pressAudio()
}

element.soundFlorest.onclick = () => {
    sound.soundOff()
    sound.startSoundFlorest()
}
element.soundRain.onclick = () => {
    sound.soundOff()
    sound.startSoundRain()
}

element.soundCoffe.onclick = () => {
    sound.soundOff()
    sound.startSoundCoffe()
}

element.soundFireplace.onclick = () => {
    sound.soundOff()
    sound.startSoundFireplace()
}