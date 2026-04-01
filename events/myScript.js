// Challenge 1

const button = document.getElementById("submit")
const message = document.getElementById("message")

const nameInput = document.getElementById("name")
const animalInput = document.getElementById("animal")

button.addEventListener('click', dontYouWish)

function dontYouWish() {
    message.innerHTML = `Hello ${nameInput.value}. Don't you wish you were a ${animalInput.value.toLowerCase()}?`
}

