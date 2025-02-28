// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#ff69b4";

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left -1}px`;
    }
}
function moveDodgerRight() {
    const screen = document.getElementById("game");
    const leftNumbers = dodger.style.left.replace("px","");
    const width  = dodger.offsetWidth;
    const left = parseInt(leftNumbers, 10);
    const right = screen.offsetWidth - width;
    
    if (right > left) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
  
