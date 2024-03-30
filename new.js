let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li");
let mouseCursorFront = document.querySelector(".cursor-front");

window.addEventListener('mousemove',cursor);
window.addEventListener('mousemove',cursorf);

function cursor(e){
    mouseCursor.style.top = e.pageY+'px';
    mouseCursor.style.left = e.pageX+'px';
}
function cursorf(f){
    mouseCursorFront.style.top = f.pageY+'px';
    mouseCursorFront.style.left = f.pageX+'px';
}