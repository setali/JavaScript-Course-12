import isOdd from 'is-odd'
import { random } from 'lodash'
import mySum, { sub as mySub, NAME } from './math'

console.log(random(1, 10))

console.log(NAME)
// const { sum: mySum } = require('./math')

console.log(isOdd(5))
console.log(isOdd(10))

console.log(mySum(2, 6))
console.log(mySub(10, 3))
