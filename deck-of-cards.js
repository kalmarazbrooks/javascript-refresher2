let vals = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
let suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']

for (let a = 0; a < suits.length; a++) {
    for (let b = 0; b < vals.length; b++) {
        console.log(vals[b] + ' of ' + suits[a])
    }
}