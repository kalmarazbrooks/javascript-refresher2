// console.log('Hello World!')

let message = 'How are you today?'
// console.log(message)

let greeting = 'Hello'
let name = 'Bob'
// console.log(greeting + ' ' + name + '!')

let age = 13
// console.log('You are ' + age)

// console.log('In ten tears, you will be ' + (12 + 11))

// Start Part 2

// if (name == 'Bob') {
//     console.log('I knew it was you, ' + name + '!')
// }

// name = 'Sue'

// if (name == 'Bob') {
//     console.log('I knew it was you, ' + name + '!')
// } else {
//     console.log('Hey ' + name + ', you\'re not Bob!')
// }

// let iAmWearingABelt = false
// let iAmWearingGlasses = false

// if (iAmWearingABelt && iAmWearingGlasses) {
//     console.log('Probably not Mr. Gorton')
// } else if (iAmWearingABelt && !iAmWearingGlasses) {
//     console.log('Probably is Mr. Gorton')
// } else {
//     console.log('Probably just some dude')
// }

// Start Part 3

for (let i = 0; i < 6; i++) {
    console.log('comp sci is awesome')
}

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

tellMeMyAge()

function tellMeMyAge() {
    console.log('You are ' + age + ' years old.')
}

tellMeMyAge()

makePizza('pepperoni', 'large')
makePizza('Meat Lovers', 'small')

function makePizza(type, size) {
    console.log('One ' + size + ' ' + type + ' pizza coming up!')
}

function pricePizza(str) {
    if (str == 'large') {
        return 17
    } else if (str == 'small') {
        return 13
    }
}

let howMuchForAPizza = pricePizza('large')
let howMuchForAPizza2 = pricePizza('small')

console.log(howMuchForAPizza)
console.log(howMuchForAPizza2)
console.log(pricePizza())

let y = 3
function scope() {
    let x = 2
    console.log('Inner Function: X: ' + x + ' Y: ' + y)
}

scope()
console.log('Outer Function: X: ' + x + ' Y: ' + y) // ReferenceError: x is not defined