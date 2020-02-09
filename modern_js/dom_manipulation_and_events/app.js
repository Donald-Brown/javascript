// Examining the document object
/*
let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[1];
val = document.links[1].id;
val = document.links[1].className;
val = document.links[1].classList[0];

val = document.images;
val = document.scripts;
val = document.scripts[2].getAttribute("src");

console.log(val);
*/
/////////////////////////////////////////////////////////////

// DOM selectors for single elements

// document.getElementById()
/*
console.log(document.getElementById("task-title"));

// Get things from the element
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").innerHTML);

const taskTitle = document.getElementById("task-title");

// Change styling
taskTitle.style.background = "orangered";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";

// Change content
taskTitle.textContent = "Tasks List";
taskTitle.innerText = "My Tasks";
taskTitle.innerHTML = '<span style="color:blue">New Tasks</span>';

// document.querySelector()

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "blue";

document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "green";
document.querySelector("li:nth-child(4)").textContent = "Hello World";
*/

//////////////////////////////////////////////////////////////////////

// DOM selectors for multiple elements

// document.getElementsByClassNane()
/*
const items = document.getElementsByClassName("collection-item");

console.log(items);

items[0].style.color = "green";
items[3].textContent = "Hello World";

// Even more specific
const listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");

console.log(listItems);

// document.getElementsByTagName
let lis = document.getElementsByTagName("li");

console.log(lis);

lis[1].style.color = "red";
lis[3].textContent = "Hello World";

// Convert HTML collection into array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index) {
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

console.log(lis);

// document.qwerySelectorAll
const items1 = document.querySelectorAll("ul.collection li.collection-item");

items1.forEach(function(item, index) {
  item.textContent = `${index}: Hello again`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function(li, index) {
  li.style.background = "#ccc";
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#f4f4f4";
}

console.log(items1);
*/

///////////////////////////////////////////////////////////////////////

// Traversing the DOM
/*
let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children elements
val = list.children;
val = list.children[1];
list.children[1].textContent = "Hello World";
list.children[list.children.length - 1].textContent = "Hello World";

// Children children
val = list.children[3].children;

list.children[0].style.background = "orangered";

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

// count child elements
val = list.childElementCount;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
*/

///////////////////////////////////////////////////////////

// Creating elements
/*
const li = document.createElement("li");

// add class
li.className = "collection-item";

// add id
li.id = "new-item";

// add attribute
li.setAttribute("title", "New Item");

// Create text node and append
li.className = "collection-item";
li.appendChild(document.createTextNode("Hello World"));

// Create new link
const link = document.createElement("a");
// Add classes
link.className = "delete-item secondary-content";
// Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector("ul.collection").appendChild(li);

console.log(li);
*/

///////////////////////////////////////////////////////////////////

// Removing and replacing elements
/*
// Replace element
// create element
const newHeading = document.createElement("h2");
// Add id
newHeading.id = "task-title";
// New text node
newHeading.appendChild(document.createTextNode("Task List"));

// Get old heading
const oldHeading = document.getElementById("task-title");
// Parent
const cardAction = document.querySelector(".card-action");

// Replace child
cardAction.replaceChild(newHeading, oldHeading);

// Remove Element
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Remove list item
lis[0].remove();

// Remove child
list.removeChild(lis[3]);

// Classes and attributes
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[1];
link.classList.add("test");
link.classList.remove("test");
val = link;

// Attributes
val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
val = link.hasAttribute("href");
link.setAttribute("title", "google");
val = link.hasAttribute("title");
link.removeAttribute("title", "google");
val = link;

console.log(val);
*/

//////////////////////////////////////////////////////////////////

// Event listeners and the event object
/*
document.querySelector(".clear-tasks").addEventListener("click", function(e) {
  console.log("Hello World");

  //e.preventDefault();
});
*/
/*
document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  //console.log("clicked");

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = "Hello";

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coordinates of event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coordinates of event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
*/

/////////////////////////////////////////////////////////////

// Mouse events
/*
const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// Click
//clearBtn.addEventListener("click", runEvent);
// Double click
//clearBtn.addEventListener("dblclick", runEvent);
// Mouse down
//clearBtn.addEventListener("mousedown", runEvent);
// Mouse up
//clearBtn.addEventListener("mouseup", runEvent);
// Moouse enter
//card.addEventListener("mouseenter", runEvent);
// Moouse leave
//card.addEventListener("mouseleave", runEvent);
// Moouse over
//card.addEventListener("mouseover", runEvent);
// Moouse out
//card.addEventListener("mouseout", runEvent);
// Moouse move
card.addEventListener("mousemove", runEvent);

// Event Handler
function runEvent(e) {
  console.log(`Event Type: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
*/

/////////////////////////////////////////////////////////////

// Keyboard and input events
/*
const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");

// Clear input
taskInput.value = "";

//form.addEventListener("submit", runEvent);

// keydown
//taskInput.addEventListener("keydown", runEvent);
// keyup
//taskInput.addEventListener("keyup", runEvent);
// keypress
//taskInput.addEventListener("keypress", runEvent);
// Focus
//taskInput.addEventListener("focus", runEvent);
// Blur
//taskInput.addEventListener("blur", runEvent);
// Cut
//taskInput.addEventListener("cut", runEvent);
// paste
//taskInput.addEventListener("paste", runEvent);
// Input
//taskInput.addEventListener("input", runEvent);


function runEvent(e) {
  console.log(`Event Type: ${e.type}`);

  console.log(e.target.value);
  
  //heading.innerText = e.target.value;

  // Get input value
  //console.log(taskInput.value);

  //e.preventDefault();
}
*/

/////////////////////////////////////////////////////////

// Event bubbling and event delegation

// Event bubbling
/*
document.querySelector(".card-title").addEventListener("click", function() {
  console.log("Card Title");
});

document.querySelector(".card-content").addEventListener("click", function() {
  console.log("Card Content");
});

document.querySelector(".card").addEventListener("click", function() {
  console.log("Card");
});

document.querySelector(".col").addEventListener("click", function() {
  console.log("Col");
});
*/

// Event   Delegation
//const delItem = document.querySelector(".delete-item");

//delItem.addEventListener("click", deleteItem);
/*
document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  //  if (e.target.parentElement.className === "delete-item secondary-content") {
  //    console.log("delete item");
  //  }

  // Targets anchor
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }
}
*/

/////////////////////////////////////////////////////////////////////////////

// Local and session storage
/*
// Set local storage item
//localStorage.setItem("name", "John");

// Set session storage item
//sessionStorage.setItem("name", "Sarah");

// Remove from storage
//localStorage.removeItem("name");

// get from local storage
//const name = localStorage.getItem('name');

// Clear local storage
//localStorage.clear();

// check if local storage if not create pull then push
document.querySelector("form").addEventListener("submit", function(e) {
  const task = document.getElementById("task").value;

  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Task Saved");

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});
*/
