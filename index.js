

const a = { b: 0 }

const optional_chaining = a?.b ?? 0

const template_literal = `Hello ${'World'}`

const object_shorthand = { a, b: 0 }

const object_destructuring = { a, b: 0 }

const array_destructuring = [1, 2, 3]

const array_destructuring_with_rest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const array_spread = [...array_destructuring, 4, 5, 6]

const object_spread = { ...object_destructuring, c: 3 }

const set_spread = new Set([1, 2, 3, 4, 5])

const map_spread = new Map([['a', 1], ['b', 2], ['c', 3]])

const promise = new Promise((resolve, reject) => {
    resolve('Success')
})

class MyClass {
    constructor() {
        this.a = 1
    }

    myMethod() {
        console.log('Hello World')
    }
}


const arrowFunction = () => {
    console.log('Hello World')
    console.log(optional_chaining)
    console.log(template_literal)
    console.log(object_shorthand)
    console.log(object_destructuring)
    console.log(array_destructuring)
    console.log(array_destructuring_with_rest)
    console.log(array_spread)
    console.log(object_spread)
    console.log(set_spread)
    console.log(map_spread)
    console.log(promise)
    const myClass = new MyClass()
    myClass.myMethod()
}

arrowFunction()

export default {
    arrowFunction
}