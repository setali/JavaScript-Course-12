// console.log(typeof name)

// name = 10

// console.log(10)

// name = { age: 3 }

// console.log(name)
// console.log(typeof name)

// var MyFirstName
// var myLastName
// var my_age

// camelCaseNaming
var myFirstName
// PascalCaseNaming
var MyFirstName
// snack_case_naming
var my_first_name
// kebab-case-naming
// var my-first-name
// UPPER_CASE_NAMING
var MY_FIRST_NAME

// var arr = [2, 9, 11, 4, 13, 23]
// // var arr = [2, 9, 4, 11, 13, 23]

// // var arr = ['Eli', 'Ali', 'Qoli', 'Fati']

// arr.sort(function (a, b) {
//   return a - b
//   //   if (a < b) return -1
//   //   return 1
// })

// console.log(arr)

// var arr = [
//   { name: 'Simin', gender: 'female', age: 25 },
//   { name: 'Sara', gender: 'female', age: 25 },
//   { name: 'Reza', gender: 'male', age: 22 },
//   { name: 'Mohadese', gender: 'female', age: 29 },
//   { name: 'Ali', gender: 'male', age: 33 },
//   { name: 'Parisa', gender: 'female', age: 31 }
// ]

// arr.sort(function (a, b) {
//   if (a.name < b.name) {
//     return -1
//   } else {
//     return 1
//   }
// })

// console.log(arr)

// var result = arr.reduce(function (acc, el) {
//   return acc + el.age
// }, 0)

// var avg = result / arr.length

// console.log(avg)

// var newArr = arr.filter(function (el) {
//   return el.age < avg
// })

// console.log(newArr)

// var arr = [1, 2, 3, 4, 5]

// var result = arr.reduce(function (acc, el) {
//   console.log(acc, el)

//   return acc + el
// }, 5)

// console.log(result)

// var arr = [1, 2, 3, 4]

// var newArr = []

// arr.forEach(function (el) {
//   newArr.push(el * 2)
// })

// console.log(newArr)

// function range (start, end) {
//   return new Array(end - start + 1).fill(start).map(function (el, index) {
//     return index + el
//   })
// }

// console.log(range(5, 12))
// console.log(range(7, 12))

// console.log(arr)

// arr.forEach(function (el) {
//   console.log(el)
// })

// var newArr = arr.map(function (el) {
//   return el * 2
// })

// console.log(newArr)

// var arr = [1, 2, 3, 4]

// var newArr = arr.map(function (el) {
//   return el * 2
// })

// console.log(newArr)

// var arr = [
//   { name: 'Simin', gender: 'female' },
//   { name: 'Sara', gender: 'female' },
//   { name: 'Reza', gender: 'male' },
//   { name: 'Mohadese', gender: 'female' },
//   { name: 'Ali', gender: 'male' },
//   { name: 'Parisa', gender: 'female' }
// ]

// var names = arr.map(function (el) {
//   console.log(el)
// })

// var names = arr
//   .filter(function (el) {
//     return el.gender === 'female'
//   })
//   .map(function (el) {
//     return el.name
//   })
//   .join()

// console.log(names)

// console.log(arr.includes({ name: 'Ali', gender: 'male' })) // Wrong

// arr.forEach(function (el) {
//   console.log(el.name)
// })

// for (var el of arr) {
//   console.log(el.name)
// }

// var hasMale = arr.some(function (el) {
//   return el.gender === 'male'
// })

// console.log(hasMale)

// var male = arr.findIndex(function (el) {
//   return el.gender === 'male'
// })

// console.log(male)

// var arr = [21, 7, 9, 3]

// var even = arr.find(function (el) {
//   return !(el % 2)
// })

// console.log(even)
