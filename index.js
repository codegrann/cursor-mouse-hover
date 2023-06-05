let container = document.querySelector("#container");
console.log(document.getElementsByTagName("div"))
// Adding eventlisteners
container.addEventListener('mousemove', move)
container.addEventListener('mouseover', move)
container.addEventListener('click', move)
function move (e) {
    // console.log(e.target);
    let xPos = e.clientX*0.073333;
    let yPos = e.clientY * 0.157480;

    // moving box1
    follow1.style.top = `${yPos}%`;
    follow1.style.left = `${xPos}%`;
    // moving box2
    follow2.style.top = `${yPos}%`;
    follow2.style.left = `${xPos}%`;
    // moving box3
    follow3.style.top = `${yPos}%`;
    follow3.style.left = `${xPos}%`;
}