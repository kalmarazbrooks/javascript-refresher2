// Challenge 1

const button = document.getElementById("submit")
const message = document.getElementById("message")

const nameInput = document.getElementById("name")
const animalInput = document.getElementById("animal")

button.addEventListener('click', dontYouWish)

function dontYouWish() {
    message.innerHTML = `Hello ${nameInput.value}. Don't you wish you were a ${animalInput.value.toLowerCase()}?`
}

// Challenge 2

button.addEventListener('mouseover', changeColor)
button.addEventListener('mouseleave', revertColor)

function changeColor() {
    nameInput.style.backgroundColor = getRandomColor()
}
function revertColor() {
    nameInput.style.backgroundColor = '#FFFFFF'
}

function getRandomColor() { // http://stackoverflow.com/questions/1484506/random-color-generator
    const code = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += code[Math.floor(Math.random() * 16)]
    }

    return color
}