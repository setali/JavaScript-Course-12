//////////////////////// 12

var number = 13

if (number % 2) {
  console.log('Odd')
} else {
  console.log('even')
}

number % 2 ? console.log('Odd') : console.log('Even')
console.log(number % 2 ? 'Odd' : 'Even')

switch (number % 2) {
  case 1:
    console.log('Odd')
    break

  case 0:
    console.log('Even')
    break
}

//////////////////////// 9

function sum () {
  var result = 0
  for (var el of arguments) {
    result += el
  }

  return result
}

function subtraction () {
  var result = arguments[0]

  for (var i = 1; i < arguments.length; i++) {
    result -= arguments[i]
  }

  return result
}

function multiply () {
  var result = 1
  for (var el of arguments) {
    result *= el
  }

  return result
}

function division () {
  var result = arguments[0]

  for (var i = 1; i < arguments.length; i++) {
    result /= arguments[i]
  }

  return result
}

///////////////////// 10

function operation () {
  var operator = arguments[0]

  var numbers = []

  for (var i = 1; i < arguments.length; i++) {
    numbers.push(arguments[i])
  }

  switch (operator) {
    case 'sum':
      return sum.apply(null, numbers)

    case 'sub':
      return subtraction.apply(null, numbers)

    case 'mul':
      return multiply.apply(null, numbers)

    case 'div':
      return division.apply(null, numbers)
  }
}

////////////////////////// 11

function operationCallback (callback) {
  var numbers = []

  for (var i = 1; i < arguments.length; i++) {
    // numbers.push(arguments[i])
    numbers[i - 1] = arguments[i]
  }

  return callback.apply(null, numbers)
}

// console.log(operationCallback(sum, 2, 5, 8))
// console.log(operationCallback(subtraction, 20, 5, 8))
// console.log(operationCallback(multiply, 2, 5, 8))
// console.log(operationCallback(division, 2, 5, 8))

// console.log(operation('sum', 2, 5, 8))
// console.log(operation('sub', 20, 5, 8))
// console.log(operation('mul', 20, 5, 8))
// console.log(operation('div', 20, 5, 8))

// console.log(subtraction(10, 2, 3))

// console.log(multiply(2, 3, 7))

// console.log(division(24, 3, 2))

/////////////////////// 4

var ali = {
  firstName: 'Ali',
  lastName: 'Mousavi',
  age: 32,
  family: {
    mother: 'Hajar',
    father: 'Mohammad',
    brothers: ['Mostafa'],
    sisters: ['Fateme', 'Zahra', 'Zeinab']
  },
  friends: ['Ali', 'Eli', 'Qoli', 'Fati']
}

//////////////////// 8

function getFullName (obj) {
  return obj.firstName + ' ' + obj.lastName
}

// console.log(getFullName(ali))

///////////////////// 7

function printFriends (obj) {
  var friends = obj.friends

  for (var friend of friends) {
    console.log(friend)
  }

  friends.forEach(function (element) {
    console.log(element)
  })
}

// printFriends(ali)

// /////////////////// 1

// var name = 'Ali',
//   family = 'Mousavi',
//   age = 32,
//   city = 'Tehran'

// console.log(
//   'My name is ' +
//     name +
//     ' ' +
//     family +
//     '\n\t => I have ' +
//     age +
//     " years old.\n\t => I'm living in " +
//     city
// )
