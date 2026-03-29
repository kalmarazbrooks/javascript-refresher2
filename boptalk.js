const vowels = ['a', 'e', 'i', 'o', 'u']
const sentence = 'meet me at three'

let final = ''

// for (let i = 0; i < sentence.length; i++) {
//     let letter = sentence[i]

//     if (letter == ' ') continue
//     if (!vowels.includes(letter)) letter += 'op'
    
//     final += ' ' + letter
// }

for (let i = 0; i < sentence.length; i++) final += (sentence[i] == ' ' ? '' : (vowels.includes(sentence[i]) ? sentence[i] : sentence[i] += 'op') + ' ')

console.log(final)