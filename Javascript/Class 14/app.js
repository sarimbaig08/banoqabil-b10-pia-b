// let num1 = Number(prompt("Enter number 1"))
// let num2 = Number(prompt("Enter number 2"))
// let sum = num1 + num2
// console.log("Sum:", sum)

// let num1 = 10
// let num2 = 40
// let num3 = "20"
// console.log(num2 / num3)

// let userName = prompt("Enter your name")

// const greetUser = function(){
//     console.log("Welcome", userName)
// }
// greetUser() 

const greetUser = (userKaNaam, age)=>{ //parameter
    console.log("Hello", userKaNaam, "Your age is:",age)

}
greetUser("haider", 54)//argument
greetUser("habib", 25)


// if (condition) { keyword, condition, block of statement 
    // runs only if the condition is true
// } else {
    // runs if condition is false
// }

// = assignment operator
// == comparision operator

let subject = prompt("Enter your subject")

if(subject == "bio"){
    console.log("You can take admission in DOW")
}
else if(subject == "computer"){
    console.log("You can take admission in FAST")
}
else if(subject == "business"){
    console.log("You can take admission in IBA")
}
else{
    console.log("You cannot take admission")
}