import Element from "./elements.js"

const element = Element()

function updateDisplay(minuts, seconds) {
    element.minutsDisplay.textContent = String(minuts).padStart(2, "0")
    element.secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function moreFiveMinutes() {
    let minuts = Number(element.minutsDisplay.textContent)
    let seconds = Number(element.secondsDisplay.textContent)

    updateDisplay(String(minuts + 5), seconds)
}

function minusFiveMinutes() {
    let minuts = Number(element.minutsDisplay.textContent)
    let seconds = Number(element.secondsDisplay.textContent)
    if (minuts <= 4) {
        alert('Não é possível reduzir o número para menos que 10.')
        return
    }

    updateDisplay(String(minuts - 5), seconds)

}

export { updateDisplay, moreFiveMinutes, minusFiveMinutes }