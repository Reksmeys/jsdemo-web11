// ---- function to welcomeNewUser ----
// declare a function
function welcomeMessage(){
    // alert("Welcome to SEA game 2023")
    document.querySelector("#welcome").innerHTML = "Welcome to SEA game 2023"
}
// call welcomeMessage function to be execute
// welcomeMessage()

// --- function which has parameter name
// default parameter
function welcomeNewUser(name="Lyly"){
    // name is a parameter can use in function scope
    document.querySelector("#welcome").innerHTML = 
    `Hi ${name}, Welcome to SEA game 2023`
}

// function default parameter
let បូក = (num1=1, num2=1) => {
    return num1 + num2
}
function ដក(num1=1, num2=1){
    return num1 - num2
}
function គុណ(num1=1, num2=1){
    return num1 * num2
}
function ចែក(num1=1, num2=1){
    return num1 / num2
}
// get value from input
let num1 = document.querySelector("#num1")
let num2 = document.querySelector("#num2")
let result = document.querySelector("#result")

document.querySelector("#sum").addEventListener("click", function(){
    console.log("in sum button")
    result.innerHTML = 
    `Result: ${បូក(parseFloat(num1.value), parseFloat(num2.value))}`
})

// scope of variable
function greeting(){
    // local scope
    let msg = "Welcome"
}

// console.log(msg)
let sum = (num1, num2) =>  {
    return num1 + num2
}
console.log(sum(3,3))

let categories = [
    {
      id: 1,
      name: "Clothes",
      image: "https://picsum.photos/640/640?r=1538",
      creationAt: "2023-04-26T13:00:12.000Z",
      updatedAt: "2023-04-26T22:19:51.000Z",
    },
    {
      id: 2,
      name: "Electronics",
      image: "https://picsum.photos/640/640?r=7784",
      creationAt: "2023-04-26T13:00:12.000Z",
      updatedAt: "2023-04-26T13:00:12.000Z",
    },
    {
      id: 3,
      name: "Change title",
      image: "https://placeimg.com/640/480/any",
      creationAt: "2023-04-26T13:00:12.000Z",
      updatedAt: "2023-04-26T18:25:37.000Z",
    },
    {
      id: 4,
      name: "Shoes",
      image: "https://picsum.photos/640/640?r=8806",
      creationAt: "2023-04-26T13:00:12.000Z",
      updatedAt: "2023-04-26T13:00:12.000Z",
    },
    {
      id: 5,
      name: "Others",
      image: "https://picsum.photos/640/640?r=9171",
      creationAt: "2023-04-26T13:00:12.000Z",
      updatedAt: "2023-04-26T13:00:12.000Z",
    },
    {
      id: 6,
      name: "nueva categoria",
      image: "https://placeimg.com/640/480/any",
      creationAt: "2023-04-26T15:04:38.000Z",
      updatedAt: "2023-04-26T15:04:38.000Z",
    },
    {
      id: 16,
      name: "bb",
      image:
        "https://firebasestorage.googleapis.com/v0/b/nextproject-76ce9.appspot.com/o/files%2Fvalorant.jfif?alt=media&token=0e923dd7-4cf6-440b-b639-dbd2d0ed2381",
      creationAt: "2023-04-26T22:34:55.000Z",
      updatedAt: "2023-04-26T22:34:55.000Z",
    },
    {
      id: 19,
      name: "gatos crazys",
      image:
        "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      creationAt: "2023-04-26T22:50:37.000Z",
      updatedAt: "2023-04-26T22:50:37.000Z",
    },
    {
      id: 20,
      name: "perros locos",
      image:
        "https://images.pexels.com/photos/5122188/pexels-photo-5122188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      creationAt: "2023-04-26T22:52:09.000Z",
      updatedAt: "2023-04-26T22:52:09.000Z",
    },
  ];

  // iterate each item of categories array 
//   using map()
categories.map((cate) => {
    // execute again and again until out of item in array
    console.log(cate.name)
})
categories.map(function(cate){
    console.log(cate)
})