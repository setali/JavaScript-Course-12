class Animal {
  static animalsCount = 1400

  static tellZooName () {
    console.log('Eram')
  }

  constructor (type) {
    this.type = 'Cat'
  }

  eat () {
    console.log('HUM HUM')
  }
}

class Cat extends Animal {
  constructor (weight, color) {
    super('CAT')
    this.weight = weight
    this.color = color
  }

  speak () {
    console.log('MYAV MYAV')
  }

  //   eat = () => { wrong
  eat () {
    console.log('HOOM HOOM')
    super.eat()
  }
}

class PersianCat extends Cat {
  constructor (name, weight, color) {
    super(weight, color)
    this.name = name
  }

  speak () {
    console.log('MIOO MIOO')
  }

  attack () {
    console.log('ATTACK!!!!!')
  }

  eat () {
    console.log('HIM HIM')
  }
}

const persian = new PersianCat('Persian', 2, 'white')

console.log(persian)
Animal.tellZooName()
console.log(Animal.animalsCount)
console.log(Cat.animalsCount)
console.log(PersianCat.animalsCount)

// const f = () => {}
// const obj = Object.create(null)

// console.log(persian instanceof PersianCat)
// console.log(persian instanceof Cat)
// console.log(persian instanceof Animal)
// console.log(persian instanceof Object)
// console.log(function () {} instanceof Object)
// console.log(f instanceof Object)
// console.log(obj instanceof Object)

// console.log(persian)

// persian.eat()

// persian.eat()
// persian.speak()
// persian.attack()
// console.log(persian.type)
// console.log(persian.color)
// console.log(persian.weight)
// console.log(persian.name)

// const cat = new Cat(2, 'brown')

// console.log(cat)
// cat.eat()
// cat.speak()

// const animal1 = new Animal('CAT')

// console.log(animal1)
// animal1.eat()
