let a = 1,
  b = 3

// let tmp = a

// a = b
// b = tmp

// a = a ^ b
// b = a ^ b
// a = a ^ b

;[b, a] = [a, b]

console.log(a, b)

// const arr = [2]

// const [first, second = 20, ...other] = arr

// console.log(first, second)
// console.log(other)

// function MyComponent ({name,  products: myProducts}) {

// }

// MyComponent({name: "Ali", products: []})

// const obj = {
//   //   firstName: 'Ali',
//   lastName: 'Mousavi',
//   age: 33,
//   gender: true,
//   family: {
//     father: 'Mohammad',
//     mother: 'Hajar'
//     // brother: 'Naqi'
//   }
// }

// const {
//   firstName: myName = 'Hasan',
//   lastName,
//   family,
//   family: { father: myFather, mother, brother = 'Qoli' },
//   ...otherObj
// } = obj

// console.log(family)
// const {
//   family: { father: myFather, mother, brother = 'Qoli' }
// } = obj

// console.log(myFather, mother, brother)

// const myName = obj.firstName
// const lastName = obj.lastName

// console.log(myName, lastName)
// console.log(otherObj)
// console.log(father, mother)

// const sum = (...args) => args.reduce((acc, el) => acc + el)
// const sum = (a, b, ...args) => console.log(a, b, args)

// console.log(sum(1, 2, 3))
// console.log(sum(1, 2))
// console.log(sum(1, 2, 3, 4))
// console.log(sum(1, 2, 3, 4, 5))

// const obj = { name: 'Ali', age: 33 }

// const arr = [...obj] // Error

// const arr = [1, 2, 3]

// const obj = { ...arr }

// console.log(obj)

// const obj = { name: 'Ali', family: 'Mousavi' }

// // const obj2 = Object.assign({}, obj)

// const obj2 = { ...obj }

// console.log(obj2)

// const obj = {
//   age: 33,
//   gender: true
// }

// const obj3 = {
//   name: 'Hasan'
// }

// const obj2 = {
//   ...obj3,
//   name: 'Ali',
//   family: 'Mousavi',
//   ...obj
// }

// console.log(obj2)

// const arr = [4, 5, 6]

// const arr2 = [1, 2, 3, ...arr, 7, 8]

// console.log(arr2)

// const numbers = [2, 9, 1, 44, 3, 72, 1, 3]

// // const result = Math.max.apply(null, numbers)
// const result = Math.max(...numbers)

// console.log(result)

// function func () {
//   //   console.log('This', this)

//   return {
//     a: 20,
//     normalFn: function () {
//       console.log(this)
//     },
//     arrowFn: () => {
//       console.log(this)
//     }
//   }
// }

// const ali = {
//   name: 'Ali',
//   family: 'Mousavi'
// }

// const obj = func.call(ali)
// // const obj = func()

// const qoli = {
//   name: 'Qoli',
//   normal: obj.normalFn,
//   arrow: obj.arrowFn
// }

// qoli.normal()
// qoli.arrow()

// obj.normalFn()
// obj.arrowFn()

// const Person = () => {
//   // Error
//   console.log(arguments) // Error
//   this.name = 'Ali'
// }

// // const a = new Person()

// Person()

// const persons = [
//   { name: 'Ali', gender: 'male', age: 33 },
//   { name: 'Mohadese', gender: 'female', age: 29 },
//   { name: 'Parisa', gender: 'female', age: 31 },
//   { name: 'Sara', gender: 'female', age: 25 },
//   { name: 'Simin', gender: 'female', age: 25 },
//   { name: 'Sofia', gender: 'female', age: 30 }
// ]

// const over30 = persons.filter(el => el.age > 30)

// const females = persons.filter(el => el.gender === 'female')

// const avg = persons.reduce((acc, el) => acc + el.age, 0) / persons.length

// console.log(avg)

// console.log(over30)
// console.log(females)

// const pow2 = a => a ** 2

// console.log(pow2(5))

// const sum = (a, b) => a + b

// console.log(sum(2, 3))

// const name = 'Ali',
//   age = 33
// // const str = "Hello\nI'm " + name

// // back tick
// const str = `Hello I'm ${name}, I have ${(function getAge () {
//   const age = 20
//   return age
// })()} years old`

// console.log(str)

// function func () {
//   for (const i = 0; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, 1000)
//   }
// }

// func()

// const arr = [1, 2, 3]

// arr[0] = 5
// // arr = [5, 6] // Error

// console.log(arr)

// const obj = {
//   name: 'Ali'
// }

// obj.name = 'Hasan'

// // obj = { name: 'Hasan' } // Error

// console.log(obj)

// const a = 10

// a = 20

// console.log(a)

// let a = 1,
//   b = 5,
//   c = 10

// function func () {
//   let a = 5

//   {
//     var a = 10
//   }

//   console.log(a)
// }

// func()

// function func () {
//   var a = 5

//   //   let b = 5

//   {
//     // let b = 10

//     {
//       //   let b = 20
//       console.log(b)

//       {
//         let b = 15
//       }

//       var a = 50
//     }

//     // console.log(b)
//   }

//   //   console.log(a)
// }

// func()

// function func1 () {

//   function func2 () {
//     // var a = 10
//     console.log(a)
//   }
// }
