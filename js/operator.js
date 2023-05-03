// ------- Assignment Operator
let firstName = " Jonh"
let num1 = 50
num1 += 50 // num1 = num1 + 50
let num2 = 110
num2 -= 10 // num2 = num2 - 10
console.log(num1, num2)

// ------ String Operator------
let fullname = "Sorn"
fullname += firstName
console.log(fullname)

// --- array --- can store multiple variable in single name
let student1 = {
    fullname: "Sreyly",
    age: 20,
    profile:"https://cdn.pixabay.com/photo/2023/04/19/17/15/couple-7938190_1280.jpg",
    favorite: "Play Card 1",
}
let student2 = {
    fullname: "Dany",
    age: 20,
    profile:"https://cdn.pixabay.com/photo/2023/04/19/17/15/couple-7938190_1280.jpg",
    favorite: "Play Card 2",
}
let student3 = {
    fullname: "Sreynouch",
    age: 20,
    profile:"https://cdn.pixabay.com/photo/2023/04/19/17/15/couple-7938190_1280.jpg",
    favorite: "Play Card 3",
}
let student4 = {
    fullname: "Ream",
    age: 20,
    profile:"https://cdn.pixabay.com/photo/2023/04/19/17/15/couple-7938190_1280.jpg",
    favorite: "Play Card 4",
}

let products = [student1, student2, student3, student4]

let ROW = document.querySelector(".row")

// loop to iterate


// ----- Arithmetic Operator ------ ( +, - , *, /, %, ++, --, **)
console.clear()
// let age = 25
// let myFriendAge = ++age // increase value 1 more and then assign to my Friend variable
// console.log(`my friend age: ${myFriendAge}, and me: ${age}`)

let result = 3**2 // 3^2
console.log(result)
// document.write(`
//    <h1>let result = 3**2  is equal to 3 <sup> 2</sup></h1>
// `)

// ----- Comparison Operator ( ==, !=, >, <, >=, <=, ===)

let a = 50;
let b = 50;
if (a === b){
    console.log("Yes it equal both value and type")
}else{
    console.log("No, it is not equal; maybe type or value")
}

// ----- Logical Operator ------
const x = 5, y = 3
// (x > 6) || (y < 5) // true
console.log((x > 6) && (y < 5))

// ----- Ternary Operator ----- 
// condition ? expression_1 : expression_2
let age = 17

let output = age >= 18 ? "You are legal to vote": "You are not legal to vote"
console.log(output)

// ------- use case for ternary operator -----

let loading = false
let noData = document.querySelector(".no-data")
let hasData = document.querySelector(".data")

let feedback = prompt("Do you want to see data?")
console.log(feedback)

feedback != "yes" ? noData.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card" aria-hidden="true">
        <img src="https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
        </h5>
        <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
        </p>
        <a class="btn btn-primary disabled placeholder col-6"></a>
        </div>
    </div>

` 
: 
products.map(product => hasData.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <img src=${product.profile} class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${product.favorite}</p>
            </div>
        </div>
    </div>
`)



