function content1func(){
  var a = document.getElementById("content1");
  var b=document.getElementById("content2");
  var c=document.getElementById("content3");
  var d=document.getElementById("content4");
  var e=document.getElementById("content5");
  
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    // f.style.display="block";


 
}
function content2func(){
  var a = document.getElementById("content1");
  var b=document.getElementById("content2");
  var c=document.getElementById("content3");
  var d=document.getElementById("content4");
  var e=document.getElementById("content5");
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
 
}
function content3func(){
  var a = document.getElementById("content1");
  var b=document.getElementById("content2");
  var c=document.getElementById("content3");
  var d=document.getElementById("content4");
  var e=document.getElementById("content5");
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
    d.style.display = "none";
    e.style.display = "none";
 
}
function content4func(){
  var a = document.getElementById("content1");
  var b=document.getElementById("content2");
  var c=document.getElementById("content3");
  var d=document.getElementById("content4");
  var e=document.getElementById("content5");
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "block";
    e.style.display = "none";
 
}
// function content5func(){
//   var a = document.getElementById("content1");
//   var b=document.getElementById("content2");
//   var c=document.getElementById("content3");
//   var d=document.getElementById("content4");
//   var e=document.getElementById("content5");
//     a.style.display = "none";
//     b.style.display = "none";
//     c.style.display = "none";
//     d.style.display = "none";
//     e.style.display = "block";
 
// }
window.onload = content1func;

var btnContainer = document.getElementById("projectlist");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("content");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active1");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active1", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active1";
  });
}