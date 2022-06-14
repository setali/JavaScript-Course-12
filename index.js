// var odds = arr.filter(function (el) {
//   return el % 2
// })
// var evens = arr.filter(function (el) {
//   return !(el % 2)
// })

// console.log(odds)
// console.log(evens)

// var arr = [9, 3, 5, 11, 21, 1]

// var result = arr.every(function (el, index, arr) {
//   return el % 2
//   // if (el % 2) {
//   //   return true
//   // } else {
//   //   return false
//   // }
// })

// console.log(result)

// var odd = true

// for (var el of arr) {
//   console.log(el)
//   if (el % 2 === 0) {
//     odd = false
//     break
//   }
// }

// console.log(odd)

// var arr = Array.from({ length: 10 }, function (el, i) {
//   console.log(el, i)
//   return i + 1
// })

// console.log(arr)

// var arr = [1, 2, 3]

// var newArr = Array.from(arr, function (el, index) {
//   return el * 2
// })

// console.log(newArr)

// var arr = [1, 2, 3, {}]

// console.log(arr.toString())

// var arr = [1, 2, 3, 4, 5, 6, 7]

// console.log(arr)
// console.log(arr.length)

// arr.length = 3

// console.log(arr)
// console.log(arr.length)

// arr.length = 10

// console.log(arr)
// console.log(arr.length)
// delete arr[1]
// arr[3] = undefined
// console.log(arr[7])
// console.log(arr[1])
// console.log(arr)

// for (var el of arr) {
//   console.log(el)
// }

// var arr = [10, 20, 30]
// var arr = new Array(10)

// console.log(arr.length)

// function * generator () {
//   yield 1
//   yield 2
//   yield 3
// }

// var iterator = generator()

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// var obj = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 32
// }

// console.log(Object.isFrozen(obj))

// Object.freeze(obj)

// console.log(Object.isFrozen(obj))

// console.log(Object.isExtensible(obj))

// Object.preventExtensions(obj)

// console.log(Object.isExtensible(obj))

// console.log(Object.isSealed(obj))

// Object.seal(obj)

// console.log(Object.isSealed(obj))

// obj.name = 'Hasan'
// delete obj.family
// obj.gender = true

// console.log(obj)

// var keys = Object.keys(obj)
// console.log(keys)

// console.log(Object.values(obj))

// var entries = Object.entries(obj)

// console.log(entries)

// for (var el of entries) {
//   console.log(el[0], el[1])
// }

// const obj = {
//   name: 'Ali'
// }

// obj.family = 'Mousavi'

// Object.defineProperty(obj, 'age', {
//   // value: 32,
//   // enumerable: false,
//   // writable: false,
//   // configurable: false
//   get: function () {
//     return this._age
//   },
//   set: function (value) {
//     this._age = +value
//   }
// })

// obj.age = '25'

// console.log(obj)

// console.log(obj.age)

// Object.defineProperty(obj, 'fullName', {
//   get: function () {
//     return this.name + ' ' + this.family
//   },
//   set: function (value) {
//     var arr = value.split(' ')
//     this.name = arr[0]
//     this.family = arr[1]
//   }
// })

// delete obj.age

// obj.age = 45

// console.log(obj)
// console.log(obj.fullName)

// obj.fullName = 'Hasan Hasani'
// console.log(obj)

// for (var key in obj) {
//   console.log(key, obj[key])
// }

// console.log(JSON.stringify(obj))

// const obj = Object.create(null)
// console.log(obj)

// const proto = {
//   name: 'Ali',
//   family: 'Mousavi'
// }

// const obj = Object.create(proto)
// obj.name = 'Hasan'

// console.log(obj)

// console.log(obj.name)
// console.log(obj.family)

// const obj = {}

// console.log(obj)
