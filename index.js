function request (url, method = 'GET') {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.send()

    xhr.onload = function () {
      if (xhr.status >= 400) {
        reject(new Error('Error not found'))
      } else {
        resolve({
          status: xhr.status,
          response: xhr.response,
          json: () => {
            return new Promise((resolve, reject) => {
              try {
                resolve(JSON.parse(xhr.response))
              } catch (err) {
                reject(err)
              }
            })
          }
        })
      }
    }

    xhr.onerror = function () {
      reject(new Error('Error'))
    }
  })
}

const url = 'https://jsonplaceholder.typicode.com/users/1'

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(() => console.log('Finally'))

// function request (url, method, cb) {
//   const xhr = new XMLHttpRequest()
//   xhr.open(method, url)
//   xhr.send()

//   xhr.onload = function () {
//     if (xhr.status >= 400) {
//       cb('Error not found')
//     } else {
//       cb(null, xhr.response)
//     }
//   }

//   xhr.onerror = function () {
//     cb('Error')
//   }
// }

// const url = 'https://jsonplaceholder.typicode.com/users/1'

// request(url, 'GET', (error, data) => {
//   if (error) {
//     console.error(error)
//   } else {
//     console.log(data)
//   }
// })

// function prom (time, greeting) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(greeting), time * 1000)
//   })
// }

// prom(1, 'Hello').then(result => console.log(result, 'Qoli'))
// prom(2, 'Hi').then(result => console.log(result, 'Ali'))
// prom(3, 'Hey').then(result => console.log(result, 'Hasan'))

// const prom2 = new Promise(resolve => {
//   setTimeout(() => resolve(), 2000)
// })

// prom2.then(() => console.log('salam'))
// prom2.then(() => console.log('ali'))

// function slider (slides) {
//   if (!Array.isArray(slides)) {
//     const error = new Error('Slides must be an array')

//     // console.log(error.name)
//     // console.log(error.message)
//     // console.log(error.stack)
//     throw error
//   }

//   console.log('Start sliding')
//   // ....
// }

// const prom1 = new Promise((resolve, reject) => {
//   reject()
//   setTimeout(() => resolve('Salam'), 1000)
// })

// prom1.then(() => {}).catch(() => {})

// console.log(1)

// setTimeout(() => {
//   console.log(2 * 3)
// }, 0)

// const prom = new Promise(resolve => {
//   resolve(2 * 4)
// })

// prom.then(result => console.log(result))

// console.log(2)

// const promAfter2 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve()
//   }, 2000)
// })

// console.log(1)
// promAfter2.then(() => console.log('salam'))
// console.log(2)
// promAfter2.then(() => console.log('ali'))
// console.log(3)

// const prom = new Promise((resolve, reject) => {
//   console.log('salam')
//   setTimeout(() => {
//     // resolve()
//     reject()
//   }, 2000)
// })

// prom
//   .then(() => {
//     console.log('Then')
//   })
//   .catch(() => {
//     console.log('Catch')
//   })
