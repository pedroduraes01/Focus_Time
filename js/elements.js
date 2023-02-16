export default function () {

    const buttonPlay = document.querySelector('.play')
    const buttonPause = document.querySelector('.pause')
    const buttonMoreMinuts = document.querySelector('.more-five-minuts')
    const buttonMinusMinuts = document.querySelector('.minus-five-minuts')
    const secondsDisplay = document.querySelector('.seconds')
    const minutsDisplay = document.querySelector('.minuts')
    const soundFlorest = document.querySelector('.florest')
    const soundRain = document.querySelector('.rain')
    const soundCoffe = document.querySelector('.coffe')
    const soundFireplace = document.querySelector('.fireplace')
    
    return {
        buttonPlay,
        buttonPause,
        buttonMinusMinuts,
        buttonMoreMinuts,
        secondsDisplay,
        minutsDisplay,
        soundCoffe,
        soundFireplace,
        soundFlorest,
        soundRain
    }
    }