async function func () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')

  const data = await response.json()

  return data
}

func().then(data => console.log(data))

function remove () {
  console.log('ali')
}

const obj = {
  name: 'Ali',
  myMethod: remove
}

obj.myMethod()

// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     return 'ali'
//   })
//   .then(console.log)
//   .catch(err => console.log(err))

// class MyClass {
//   static [Symbol.hasInstance] (instance) {
//     if (Array.isArray(instance) || instance === 42) {
//       return true
//     }
//   }
// }

// console.log([] instanceof MyClass)
// console.log(42 instanceof MyClass)
// console.log({} instanceof MyClass)

// const person = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 33,
//   [Symbol.toPrimitive] (hint) {
//     if (hint === 'number') {
//       return this.age
//     } else if (hint === 'string') {
//       return `${this.name} ${this.family}`
//     }

//     return null
//   }
// }

// console.log(+person)
// console.log(String(person))

// const sym1 = Symbol.for('age')

// const sym2 = Symbol.for('age')

// console.log(sym1)
// console.log(sym2)

// console.log(sym1 === sym2)

// const sym = Symbol('age')

// const person = {
//   name: 'Ali',
//   family: 'Mousavi',
//   [sym]: 33
// }

// console.log(person)
// // console.log(person['name'])
// // console.log(person['family'])
// // console.log(person['Symbol(age)'])
// // console.log(person[sym])

// for (let key in person) {
//   console.log(key)
// }

// console.log(JSON.stringify(person))

// const sym1 = Symbol('Sym1')

// const sym2 = Symbol('Sym2')

// console.log(sym1)

// console.log(sym2)

// console.log(sym1 === sym2)
