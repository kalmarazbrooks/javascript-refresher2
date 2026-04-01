const button = document.getElementById('submit')
const msg = document.getElementById('message')
const input = document.getElementById('name')

button.addEventListener('click', scream)

function scream() {
    let message = document.createElement('p')
    document.body.append(message)
    
    message.innerHTML = input.value
}