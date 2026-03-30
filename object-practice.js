const student1 = {
    firstName: "John",
    lastName: "Doe",
    GPA: 3.12,
    playsVolleyball: false
}

const students = [student1]

// I know John Doe!

console.log(`I know ${student1.firstName} ${student1.lastName}!`)

console.log(`He is ${student1.playsVolleyball ? false : 'not '}on the volleyball team.`)

const student2 = {
    firstName: "Jane",
    lastName: "Doe",
    GPA: 1.1,
    playsVolleyball: true
}

students.push(student2)

console.table(students)

students.push({firstName: "Nivek",
    GPA: 4.1,
})
students[2].lastName = 'Eix'

console.table(students)