// Exercise 1

// const card1 = {
//     rank: 'Ace',
//     suit: 'Hearts',
// }
// const card2 = {
//     rank: '7',
//     suit: 'Diamonds',
// }

// console.log(`You are holding the ${card1.rank} of ${card1.suit} and the ${card2.rank} of ${card2.suit}`)

// const card3 = {
//     rank: 'King',
//     suit: 'Spades',
// }

// const cards = [card1, card2, card3]

// for (let i = 0; i < cards.length; i++) {
//     console.log(`${cards[i].rank} of ${cards[i].suit}`)
// }

// Exercise 2

const cards = []
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']

for (let a = 0; a < suits.length; a++) {
    for (let b = 0; b < ranks.length; b++) {
        cards.push({rank: ranks[b], suit: suits[a]})
    }
}

console.table(cards)