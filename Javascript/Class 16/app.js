let userEmail
let userPass
let gender;

const getUserDetails = (e)=>{
    e.preventDefault()
    userEmail = document.querySelector("#userEmail").value
    userPass = document.getElementById("userPassword").value
    gender = document.querySelector('[name="gender"]:checked')
    if(gender){
        gender = gender.value
    }

let userObj = {
    email: userEmail,
    pass: userPass,
    gender: gender
}

// console.log(userObj)
// localStorage.setItem("userObj",JSON.stringify(userObj))
let user = localStorage.getItem("userObj")
user = JSON.parse(user)
console.log(user)

    // localStorage.setItem("userEmail", userEmail)
    // localStorage.setItem("userPass", userPass)
    // localStorage.setItem("gender", gender)
}

// Falsy Values: 0, null, undefined, ' ', NaN 