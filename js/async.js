
function welcomeMessage(name){
    console.log(`Welcome, ${name}`)
}
let firstName = "Dany"
welcomeMessage(firstName) 
// process sychronous

let pList = document.querySelector(".productlist")
// fetch api: fetch()
let productAPI = 'https://api.escuelajs.co/api/v1/products'
function getAllProducts(){
    fetch(productAPI)
    .then(resp => resp.json())
    .then(response => response.map(res => pList.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="card border-0 shadow-sm h-100">
                <img src=${res.images[0]} class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text"> ${res.title}</p>
                </div>
            </div>
        </div>
    `))
    
}

let basePath = 'https://image.tmdb.org/t/p/w440_and_h660_face/'
let moviesAPI = 'https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1'
function getPopularMovies(){
    fetch(moviesAPI)
    .then(resp => resp.json())
    .then(res => console.log(res))
}
function getCategories(){
    fetch("https://api.escuelajs.co/api/v1/categories")
    .then(resp => resp.json())
    .then(res => console.log(res))
}
getAllProducts()
getCategories()
// getPopularMovies()
let userList = document.querySelector(".userlist")
const fetchUser = async () => {
    const resp = await fetch("https://api.escuelajs.co/api/v1/users")
    return resp.json()
}
fetchUser()
.then(resp => resp.map(user => userList.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div class="card border-0 shadow-sm h-100">
            <img src=${user.avatar} class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text"> ${user.name}</p>
            </div>
        </div>
        </div>

`))