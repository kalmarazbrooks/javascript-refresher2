const names = ['Kevin', 'James', 'Collin', 'Kaden']

names.push('Mr. Gorton')

// The second value in the array is Collin

console.log(`The second value in the array is ${names[2]}`)
console.log(names)

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

names.sort()

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

names[names.indexOf('Kaden')] = 'Nedak'

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}