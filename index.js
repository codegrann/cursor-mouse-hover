let container = document.querySelector("#container");

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

for(var i=0; i<4; i++){
    setTimeout(()=> console.log(i), 0);
    // console.log(i);
}


console.log(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
console.log(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));