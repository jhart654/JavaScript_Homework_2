// Exercise #1

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let i = 0; i < Object.values(person3).length; i++){
    console.log(Object.values(person3)[i])
}

// Exercise #2
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    } 

    printInfo(){
        return `Name: ${this.name} \nAge: ${this.age}`
    }

    incrementAge(){
        return this.age++
    }
}
let fred = new Person('Fred', 34)
console.log(fred.printInfo())
console.log(fred.incrementAge())
console.log(fred.incrementAge())
console.log(fred.incrementAge())
console.log(fred.incrementAge())

let paul = new Person('Paul', 28)
console.log(paul.printInfo())
console.log(paul.incrementAge())
console.log(paul.incrementAge())
console.log(paul.incrementAge())
console.log(paul.incrementAge())

// Exercise #3

const isGreaterThanTen = (word) => {
    return new Promise( (resolve, reject) => {
        if (word.length >= 10){
            resolve(true)
            console.log('Big Word')
        } else {
            reject(false)
            console.log('Small Word')
        }
    } )
}

isGreaterThanTen('performance')

// Codewars #1
// reverse string

function solution(str){
    let newStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    }
    console.log(newStr)
}    

solution('hello')

// Codewars #2
// Training JS #3: Basic data types--String

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  console.log(d1+a2+d2);
}
function Bee(){
  //select some variable to combine "Bee"
  console.log(b1+e2+e2)
}
function banana(){
  //select some variable to combine "banana"
  console.log(b2+a2+n2+a2+n2+a2)
}

Dad()
Bee()
banana()