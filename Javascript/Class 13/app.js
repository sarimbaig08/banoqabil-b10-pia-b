testingHositing() // Function is completely hoisted

// var number2; // Hoisted Variable

// var userName = "Mirza Sarim Baig" // variable type, variable name, assignment operator, value

// var userName; // variable declaration
// userName = "Mirza Sarim Baig" // initialization OR values assignment

// var userName;
// console.log(userName)

// var userEmail = "zyobix@gmail.com"
// console.log("UserEmail:", userEmail)

// var userEmail = "sharique@gmail.com"
// console.log("UserEmail:", userEmail)


// let userEmail = "zyobix@gmail.com"
// console.log("UserEmail:", userEmail)

// userEmail = "sharique@gmail.com"
// console.log("UserEmail:", userEmail)

// const userEmail = "zyobix@gmail.com"
// console.log("UserEmail:", userEmail)

// try {
//   userEmail = "sharique@gmail.com"
// } catch (error) {
//   console.error("Error caught:", error.message)
// }


// TYPE      VAR RE-DEC          VALUE RE-ASG           SCOPE               IS HOISTED
// var          yes                 yes                 function/global         yes
// let          no                  yes                 block scope             no
// const        no                  no                  block scope             no

// PRIMITIVE
// number, string, boolean, null, undefined ->  Store copy of original value 

// let number = 23;
// let age = number;
// age= 20;
// console.log(age)

// NON PRIMITIVE / REFERECE DATA TYPES
// {} [] () -> Store Reference of original value

// let number = [23,24];
// let age = number;
// age.pop()
// console.log(age)

//HOISTING (take the var declaration on top)

// var number1 = 10
// console.log(number1)

// console.log(number2)
// const number2 = 20


function testingHositing (){
    console.log("Function is hoisted")
}
testingArrowFunc()

const testingArrowFunc = ()=>{
    console.log("Arrow function is not hoisted")
}
