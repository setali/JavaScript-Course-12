function func () {
  var i // AB24
  for (i = 0; i < 5; i++) {
    function func (j) {
      setTimeout(function () {
        console.log(j)
      }, 1000)
    }

    func(i)
  }
}

func()
// console.log(1)

// var intervalId = setInterval(function () {
//   console.log('Ali')
// }, 1000)

// setTimeout(() => {
//   clearInterval(intervalId)
// }, 5000)

// console.log(2)

// console.log(1)

// setTimeout(function () {
//   console.log('salam')
// }, 1000)

// console.log(2)

// setTimeout(function () {
//   console.log('ali')
// }, 2000)

// console.log(3)

// function func (a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c
//     }
//   }
// }

// console.log(func(2)(5)(8))

// var sum20 = func(20)

// console.log(sum20(5)(7))
// console.log(sum20(10)(7))

// var sum30 = sum20(10)
// console.log(sum30(5))
// console.log(sum30(8))

// var myCounter = (function () {
//   var counter = 0

//   function increase () {
//     counter++
//     console.log(counter)
//   }

//   function decrease () {
//     counter--
//     console.log(counter)
//   }

//   return {
//     increase,
//     decrease
//   }
// })()

// var myCounter = counterWrapper()
// console.log(myCounter)
// var myCounter2 = counterWrapper()
// console.log(myCounter2)

// var number
// console.log(number)

// function func () {
//   var number // Hoisting
//   console.log(number)
//   number = 20
// }
// func()

// function func () {
//   console.log(number)
//   var number = 20
//   console.log(number)
// }

// function func () {
//   if (true) {
//     var x = 20
//   }

//   console.log(x)
// }
// func()

// function func () {
//   var a = 10
//   console.log(a)
//   function func2 () {
//     var a = 20
//     console.log(a)
//   }
//   func2()
//   console.log(a)
// }

// func()

// // var ali = 'mousavi'
// // window.ali = 'mousavi'

// function func () {
//   var a = 5
//   console.log(a)
//   // console.log(ali)

//   function func2 () {
//     // window.ali = 'Mousavi'
//     ali = 'Mousavi'
//     var b = 10
//     console.log(b)
//     console.log(a)
//     a = 20
//     console.log(ali)
//     console.log(window.ali)
//   }

//   func2()

//   console.log(a)
// }

// func()

// console.log(ali)

// function factorial (n) {
//   return n === 1 ? 1 : n * factorial(n - 1)
// }

// function factorial (n) {
//   var result = n

//   for (var i = n - 1; i > 1; i--) {
//     result *= i
//   }

//   return result
// }

// console.log(factorial(3))

// 5! => 5 * 4!
// 4! => 4 * 3!
// 3! => 3 * 2!
// 2! => 2 * 1!
// 1! => 1

// function sum (a, b) {
//   return a + b
// }

// function sub (a, b) {
//   return a - b
// }

// function noop () {}

// function operate (a, b, cb = noop) {
//   console.log(cb)
//   return cb(a, b)
// }

// console.log(operate(4, 3, sum))
// // console.log(operate(4, 3, sub))

// var result = operate(4, 3, function (a, b) {
//   return a * b
// })

// operate(4, 3)

// console.log(result)

// var result = sum(2, 5)
// console.log(result)
// console.log(sub(10, 5))

// for (var i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue
//   }
//   console.log(i)
// }

// console.log(12 % 2)

// var sum = function (a, b) {
//   return a + b
// }

// console.log(sum(2, 4))

// function sum (a = 0, b = 0, c = 0, d = 5) {
// function sum (a = 0, b = 0, c = 0, d = 5) {
//   var result = 0

//   for (var i = 0; i < arguments.length; i++) {
//     result = result + arguments[i]
//   }

//   return result

//   // if (c === undefined) {
//   //   c = 0
//   // }

//   // c = c === undefined ? 0 : c

//   // c = c || 0

//   // var result = a + b + c + d

//   // return result
// }
// console.log(sum(2, 5, 3, 9))
// console.log(sum(2, 5, 7))
// console.log(sum(2, 5))
// console.log(sum(2))
// console.log(sum())

// function saySalam () {
//   console.log('salam')
// }

// console.log(saySalam)
