// data type
// ----- 1. string -------
let firstName = "Panha"
let lastName = "Long"
let favorite = 'Researching and Gaming'
let selfIntroduction = 
    `Hi, greeting from Cambodia. I, 
    ${lastName} ${firstName}, my favorite is 
    ${favorite}.
   `
console.log(selfIntroduction)
console.log(typeof(firstName))
let numberOfApples = '90'
// ---- 2. Number
let myApples = 90
console.log(typeof(numberOfApples))
let result = numberOfApples / myApples
//let result = numberOfApples * myApples
//let result = numberOfApples - myApples
//let result = numberOfApples % myApples
console.log('------ Total apples ', typeof(result), result)

// ----backtick
let HEADER = `
    <h1>Welcome, Developer Cambodia</h1>
    <h2>Welcome</h2>
`
document.querySelector('.heading').innerHTML = HEADER

// 2. Number
let num1 = 40.5
let num2 = "0"
let num3 = 5e-5 // 5 x 10^-5 = 0.00005
let num4 = 5e6 // 500000
let num5 = 5_000_000
let output = num1 / num2
console.clear()
console.log(output)

// BigInt

// Boolean ( true, false ) - condition 
let loading = true
loading = false

if (loading){
    // show skelaton
}
else{
    // show real data
}

// Undefined 

let age
console.log(age)

// null - empty object

// object

let student = {
    fullname: "Sreyly",
    age: 20,
    profile:"https://cdn.pixabay.com/photo/2023/04/19/17/15/couple-7938190_1280.jpg",
    favorite: "Play Card",
}
console.log(student.fullname, student.age, student.favorite)
// student = null
console.log(student)

document.querySelector('.row').innerHTML = `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-0 h-100 shadow ">
            <img src=${student.profile} class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${student.fullname}</p>
            </div>
        </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-0 h-100 shadow">
            <img src=${student.profile} class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${student.fullname}</p>
            </div>
        </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-0 h-100 shadow">
            <img src=${student.profile} class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${student.fullname}</p>
            </div>
        </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card border-0 h-100 shadow">
            <img src=${student.profile} class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${student.fullname}</p>
            </div>
        </div>
        </div>
`