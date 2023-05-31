let followCursor = document.querySelector("#follow");
let container = document.querySelector("#txt");
// followCursor.onmouseout=function(e){
// console.log(e.target);
// console.log(e.clientX , e.clientY);
// }

container.onmouseover = function (e) {
    // console.log(e.target);
    let xPos = e.clientX;
    let yPos = e.clientY * 0.157480;
    console.log(xPos, yPos);
    followCursor.style.left = `${xPos}`;
    followCursor.style.top = `(${yPos})px`;
    followCursor.style.color = `red`;
}


console.log("It is not working");
