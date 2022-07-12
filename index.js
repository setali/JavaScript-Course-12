const person = {
  firstName: 'Ali'
  // family: {
  //   // father: {
  //   //   // name: 'Mohammad'
  //   // }
  // }
  // getFullName () {
  //   return 'Ali Mousavi'
  // }
}

console.log(person.family?.father?.name) // Optional chaining

console.log(person.getFullName?.())

// console.log(NaN ?? 'salam') // Nullish

// const data = {
//   name: NaN
// }

// const firstName = data.name ?? 'Anonymous'

// console.log(firstName)

// function Person (name, family) {
//   this.name = name
//   this.family = family

//   this.getFullName = () => `${this.name} ${this.family}`
// }

// class Person {
//   country = 'Iran'

//   constructor (name, family) {
//     this.name = name
//     this.family = family
//   }

//   getFullName = () => `${this.name} ${this.family}`
// }

// const ali = new Person('Ali', 'Mousavi')

// console.log(ali)
// console.log(ali.getFullName())

// console.log(ali instanceof Person)

// new Person()

// class Person {}

// async function request (url, options = {}) {
//   const response = await fetch(url, options)
//   return await response.json()
// }

// const url = 'https://jsonplaceholder.typicode.com/users/1'

// request(url)
//   .then(console.log)
//   .catch(console.log)

// function delay (time, value) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(value)
//     }, time * 1000)
//   })
// }

// async function func () {
//   console.log(1)
//   await delay(2)
//   console.log(2)
// }

// func()

// async function func () {
//   console.log('a')
//   const data = await delay(1, 'Ali')
//   console.log(data)
//   console.log('b')
//   const data2 = await delay(2, 'Eli')
//   console.log(data2)
//   console.log('c')
// }

// async function func2 () {
//   console.log(1)
//   await func()
//   console.log(2)
// }

// func2()

// function prom () {
//   return new Promise(resolve => {
//     resolve('Ali')
//   })
// }

// async function prom () {
//   // throw 'Error'
//   return 'Ali'
// }

// prom()
//   .then(data => console.log(data))
//   .catch(console.log)
