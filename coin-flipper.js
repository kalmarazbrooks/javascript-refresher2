// Parameters

let NUMBER_OF_SIMULATIONS = 100
let NUMBER_OF_FLIPS_PER_SIM = 100

// Main

let max = 0
let min = 9999
let avg = 0

repeatCoinFlipper(NUMBER_OF_SIMULATIONS, NUMBER_OF_FLIPS_PER_SIM)

console.log('The most number of heads you got was ' + max)
console.log('The least number of heads you got was ' + min)
console.log('The average number of heads you got was ' + avg)

// Functions

function repeatCoinFlipper(times, flips) {
    for (let i = 0; i < times; i++) {
        let numHeads = coinFlipper(flips)
            
        checkMaxMin(numHeads)
        avg += numHeads
    }

    avg /= times
}

function coinFlipper(flips) {
    let heads = 0

    for (let i = 0; i < flips; i++) {
        heads += flipCoin()
    }

    return heads
}

function flipCoin() {
    let flip = Math.random()

    return flip > 0.5 ? 1 : 0
}

function checkMaxMin(num) {
    if (num > max) max = num
    if (num < min) min = num
}