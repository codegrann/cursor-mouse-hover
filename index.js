let followCursor = document.querySelector("#follow1");
let container = document.querySelector("#txt");
// followCursor.onmouseout=function(e){
// console.log(e.target);
// console.log(e.clientX , e.clientY);
// }
container.addEventListener('mousemove', move)
container.addEventListener('mouseover', move)
container.addEventListener('click', move)
function move (e) {
    // console.log(e.target);
    let xPos = e.clientX*0.073333;
    let yPos = e.clientY * 0.157480;
    console.log(xPos, yPos);
    followCursor.style.top = `${yPos}%`;
    followCursor.style.left = `${xPos}%`;
    followCursor.style.color = `red`;
}


console.log("It is not working");
