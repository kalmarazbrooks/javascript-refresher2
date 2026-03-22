let heads = 0

function flipCoin() {
    let flip = Math.random()

    if (flip > 0.5) heads++
}

for (let i = 0; i < 100; i++) {
    flipCoin()
}

console.log('Out of 100 flips, you got ' + heads + ' heads.')