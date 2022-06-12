// var person = {
//   firstName: 'Ali',
//   lastName: 'Mousavi',
//   age: 32,
//   gender: true,
//   family: {
//     father: 'Mohammad',
//     mother: 'Hajar'
//   },
//   education: undefined
// }

// var jsonPerson = JSON.stringify(person)

// console.log(person)
// console.log(jsonPerson)

// var newPerson = JSON.parse(jsonPerson)

// console.log(newPerson)

// console.log(newPerson === person)

// JSON => JavaScript Object Notation
// JavaScript
// Java Script

var obj1 = {
  a: 10,
  // AE12CB
  b: {
    c: 40
  }
}

// var obj3 = {
//   a: 40,
//   b: 50
// }

// var obj2 = obj1

// var obj2 = {}
// Object.assign(obj2, obj3, obj1)

// var obj2 = Object.assign({}, obj1)
var obj2 = JSON.parse(JSON.stringify(obj1))

obj2.a = 20
obj2.b.c = 100

console.log(obj2.b === obj1.b)

console.log(obj1)
console.log(obj2)
console.log(obj1 === obj2)

// var obj = {}

// var numbers = [1, 8, 3, 19, 24, 6, 2]
// var result = Math.max.apply({}, numbers)

// console.log(result)

// var firstName = 'Ali'
// var lastName = 'Mousavi'

// function welcome (greeting) {
//   // console.log(this)
//   console.log(greeting + ' ' + this.firstName + ' ' + this.lastName)
// }

// welcome('Hello')

// var mohaddese = {
//   firstName: 'Mohaddese',
//   lastName: 'Talebi'
// }

// welcome.call(mohaddese, 'Hi')

// var parisa = {
//   firstName: 'Parisa',
//   lastName: 'Ahmadi'
// }

// welcome.apply(parisa, ['Salam'])

// var pegah = {
//   firstName: 'Pegah',
//   lastName: 'Shahbazi'
// }

// var newWelcome = welcome.bind(pegah, 'Hello')
// newWelcome.call(parisa)

// var firstName = 'Ali'
// var lastName = 'Mousavi'

// var sara = {
//   firstName: 'Sara',
//   lastName: 'Motamedi',
//   getFullName: function () {
//     console.log(this.firstName + ' ' + this.lastName)
//   }
// }

// var sofia = {
//   firstName: 'Sofia',
//   lastName: 'Ahanj',
//   getFullName: sara.getFullName
// }

// var getFullName = sofia.getFullName

// sofia.getFullName()
// sara.getFullName()

// getFullName()

// var firstName = 'Ali',
//   lastName = 'Mousavi'

// function Person (name, family) {
//   this.firstName = name
//   this.lastName = family

//   this.getFullName = function () {
//     console.log(this)
//     return this.firstName + ' ' + this.lastName
//   }
// }

// var obj = new Person('Reza', 'Derakhshan')
// console.log(obj)
// console.log(obj.getFullName())

// var firstName = 'Ali'
// var lastName = 'Mousavi'
// function getFullName () {
//   console.log(this === window)
//   return this.firstName + ' ' + this.lastName
// }

// getFullName()

// var ali = {
//   firstName: 'Ali',
//   lastName: 'Mousavi',
//   getFullName: function () {
//     console.log(this === ali)
//     return this.firstName + ' ' + this.lastName
//   },
//   family: {
//     mother: 'Hajar',
//     father: 'Mohammad',
//     func: function () {
//       console.log(this)
//     }
//   }
// }

// console.log(ali.getFullName())

// ali.family.func()

// function Person (name, family, age) {
//   this.name = name
//   this.family = family
//   this.age = age

//   this.getFullName = function () {
//     return this.name + ' ' + this.family
//   }
// }

// var ali = new Person('Ali', 'Mousavi', 32)

// console.log(ali)
// console.log(ali.getFullName())

// var reza = new Person('Reza', 'Derakhshan', 22)

// console.log(reza)
// console.log(reza.getFullName())

// console.log(ali instanceof Person)
// console.log(reza instanceof Person)
// console.log('salam' instanceof Person)

// var ali = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 32
// }

// var reza = {
//   name: 'Reza',
//   family: 'Derakhshan',
//   age: 22
// }
