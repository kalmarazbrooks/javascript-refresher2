// Exercise 1

const card1 = {
    rank: 'Ace',
    suit: 'Hearts',
}
const card2 = {
    rank: '7',
    suit: 'Diamonds',
}

console.log(`You are holding the ${card1.rank} of ${card1.suit} and the ${card2.rank} of ${card2.suit}`)

const card3 = {
    rank: 'King',
    suit: 'Spades',
}

const cards = [card1, card2, card3]

for (let i = 0; i < cards.length; i++) {
    console.log(`${cards[i].rank} of ${cards[i].suit}`)
}

// Exercise 2

