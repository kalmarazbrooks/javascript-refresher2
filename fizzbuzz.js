let fizzes = 0
let buzzes = 0
let fizzbuzzes = 0

for (let i = 1; i <= 10000; i++) {
    str = i
    temp = 0

    if (i % 3 == 0) {
        str += ' fizz'
        fizzes += 1
        temp += 1
    }
    if (i % 5 == 0) {
        str += ' buzz'
        buzzes += 1
        temp +=1
    }

    if (temp == 2) fizzbuzzes += 1

    console.log(str)
}
console.log('There were ' + fizzes + ' fizz\'s, ' + buzzes + ' buzz\'s, and ' + fizzbuzzes + ' fizz buzz\'s out of 1000')