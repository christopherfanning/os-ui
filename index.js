// document.getElementById("btn").addEventListener("click", function () {
//   document.getElementById("demo").innerHTML = "Hello World";
//   this.style.backgroundColor = "red"
// });


var elements = document.getElementsByClassName("icon");
var closeBtns = document.getElementsByClassName("closeBtn");


function clickHandler(params) {
  console.log("Click handler function.");
  if (this.style.backgroundColor === "red") {
    this.style.backgroundColor = "red";

  }
  this.parentNode.style.position = "absolute";
  this.parentNode.style.display = "fixed";
  console.log(this.parentNode);
  // this.style.height = "75vh";
  // this.style.width = "75vw";

  this.parentNode.style.height = "60vh";
  this.parentNode.style.width = "60vw";
  this.parentNode.style.transform = "translateY(8em)";
}

function closeBtnHandler(params) {
  console.log("Close button function");
  this.parentNode.style.backgroundColor = "green";
  this.parentNode.style.color = 'cyan';
  this.nextElementSibling.style.height = "100px";
  this.nextElementSibling.style.width = "100px";

  this.parentNode.style.display = "inline";
  this.parentNode.style.transform = "none";
  this.nextElementSibling.style.position = "reletive";
  this.parentNode.style.height = "100px";
  this.parentNode.style.width = "100px";
  // this.style.color = 'yellow';
  // alert("clicked the close button.")
  this.parentNode.style.position = "static";
  const logme = this.parentNode;
  console.log(`this is the closeBtn ${logme}`);
  console.log(logme);
}

// document.getElementsByClassName("icon").addEventListener("click", function () {
//   alert("got click");
// });

Array.from(elements).forEach(function (element) {
  console.log(element);
  element.addEventListener('click', clickHandler);
});

Array.from(closeBtns).forEach(function (element) {
  element.addEventListener('click', closeBtnHandler);
});