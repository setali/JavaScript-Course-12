var person = {
  firstname: 'Ali',
  lastname: 'Mousavi',
  age: 32,
  family: {
    father: 'Mohammad',
    mother: 'Hajar'
  },
  freinds: ['Ali', 'Eli', 'Qoli', 'Fati']
}

console.log('firstname' in person)
console.log('city' in person)
console.log('freinds' in person)

// for (var key in person) {
//   console.log(key)
//   console.log(person[key])
// }

// for (var char of 'salam') {
//   console.log(char)
// }

// var freinds = ['Ali', 'Eli', 'Qoli', 'Fati']

// for (var freind of freinds) {
//   console.log(freind)
// }

// var text = ''

// for (var i = 0; i < 10; i++) {
//   if (i === 5) break

//   text += i
//   //   text = text + i
// }

// console.log(text)

// console.log('Start')
// var i = 0
// for (;;) {
//   //   if (i % 2) continue

//   if (i >= 10) break

//   console.log(i)
//   i++
// }

// console.log('End')

// var i = 0

// do {
//   console.log(i)
//   i++
// } while (i < 5)

// var freinds = ['Ali', 'Eli', 'Qoli', 'Fati']

// for (var i = 0; i < freinds.length; i++) {
//   console.log(freinds[i])
// }

// for (var i = 10; i < 20; i = i + 2) {
//   console.log('salam', i)
// }

// var a = 10

// a % 2 ? console.log('Odd') : console.log('Even')

// console.log(a % 2 ? 'Odd' : 'Even')

// var char = 'C'

// switch (char) {
//   case 'A':
//   case 'a':
//     console.log('Char is A')
//     break

//   case 'B':
//     console.log('Char is B')
//     break

//   default:
//     console.log('Char is not A or B')
// }

// var a = 11

// if (a % 2) {
//   console.log('A is odd')
// } else {
//   console.log('A is even')
// }

// var a = 0

// if (a > 0) {
//   console.log('A is positive')
// } else if (a < 0) {
//   console.log('A is negative')
// } else {
//   console.log('A is zero')
// }

// var a = 10

// if (a === 10) {
//   console.log('A is 10')
// } else {
//   console.log('A is not 10')
// }

// ~ tilda ! @ # $ % ^ & ampersand *  () ` ' " : ; . , ? / \ | pipe = - _ [] {} <>

// 0 & 0 => 0
// 0 & 1 => 0
// 1 & 0 => 0
// 1 & 1 => 1

// 0 | 0 => 0
// 0 | 1 => 1
// 1 | 0 => 1
// 1 | 1 => 1

// console.log('b' + 'a' + +'a' + 'a')
