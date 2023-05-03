// code javascript
// variable
var x = 5;
var y = 90;
// let x = 50;
console.log(x + y);

let a; // declare variable named: a
a = 100; // assign value: 100 to variable: a
a = 200; // re-assign value to 200
a = "apple" // re-assign and change type of data
console.log(a)

// constant: a special variable that store final value

/* 
    this variable store domain name of webiste
    this is special variable
*/
const SCHOOL_URL = "istad.co"
// SCHOOL_URL = "istad.com"

// DOM: document object model ( bridge between html file and user interface)
// DOM manipulate user interfaces by using DOM methods
let HEADING = document.getElementById('heading')
console.log(HEADING)
HEADING.innerHTML = "Hello World"
HEADING.setAttribute("class", "text-darkblue")
// document.querySelector
document.querySelector("#heading")