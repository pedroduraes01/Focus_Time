export default function() {

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    
    const soundFlorest = new Audio("./assets/sounds/Floresta.wav")
    const soundRain = new Audio("./assets/sounds/Chuva.wav")
    const soundCoffe = new Audio("./assets/sounds/Cafeteria.wav")
    const soundFireplace = new Audio("./assets/sounds/Lareira.wav")
    
    function pressAudio() {
        buttonPressAudio.play()
    }
    
    function startSoundFlorest() {
        soundFlorest.play()
        soundFlorest.loop = true
    }
    
    function startSoundRain() {
        soundRain.play()
        soundRain.loop = true
    }
    
    function startSoundCoffe() {
        soundCoffe.play()
        soundCoffe.loop = true
    }
    
    function startSoundFireplace() {
        soundFireplace.play()
        soundFireplace.loop = true
    }
    
    function soundOff() {
        soundCoffe.pause()
        soundFireplace.pause()
        soundFlorest.pause()
        soundRain.pause()
    }
    
    return {
        pressAudio,
        startSoundFlorest,
        startSoundCoffe,
        startSoundRain,
        startSoundFireplace,
        soundOff
    }
    }