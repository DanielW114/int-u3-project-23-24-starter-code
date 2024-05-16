// Declare variables below to save the different divs of your story.
let title = document.querySelector(".title");
let opening = document.querySelector(".story-opening");
let button1 = document.querySelector(".option-one");
let screen1 = document.querySelector(".option-one-screen");
let continue1 = document.querySelector(".continue-1");
let ending1 = document.querySelector(".option-one-end");
let restart1 = document.querySelector(".restart1");
let button2 = document.querySelector(".option-two");
let screen2 = document.querySelector(".option-two-screen");
let continue2 = document.querySelector(".continue-2");
let ending2 = document.querySelector(".option-two-end");
let restart2 = document.querySelector(".restart2");
let button3 = document.querySelector(".alt-path");
let ending3 = document.querySelector(".alt-path-end");
let restart3 = document.querySelector(".restart3")
// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

button1.addEventListener('click', function() {
  opening.style.display = "none"
  screen1.style.display = "contents"
});

continue1.addEventListener('mouseover', function() {
  screen1.style.display = "none"
  ending1.style.display = "contents"
  title.innerHTML = "Ending 1"
});


button2.addEventListener('click', function() {
  opening.style.display = "none"
  screen2.style.display = "contents"
});

continue2.addEventListener('mouseover', function() {
  screen2.style.display = "none"
  ending2.style.display = "contents"
  title.innerHTML = "Ending 2"
});

restart1.addEventListener('click', function() {
  ending1.style.display = "none"
  opening.style.display = "contents"
  title.innerHTML = "3 Little Pigs"
});

restart2.addEventListener('click', function() {
  ending2.style.display = "none"
  opening.style.display = "contents"
  title.innerHTML = "3 Little Pigs"
});

button3.addEventListener('mouseover', function() {
  screen2.style.display = "none"
  ending3.style.display = "contents"
  title.innerHTML = "Alternate Ending"
});

restart3.addEventListener('click', function() {
  ending3.style.display = "none"
  opening.style.display = "contents"
  title.innerHTML = "3 Little Pigs"
});