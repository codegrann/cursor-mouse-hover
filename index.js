let container = document.querySelector("#container");

// Adding eventlisteners
container.addEventListener('mousemove', move)
container.addEventListener('mouseover', move)
container.addEventListener('click', move)

// GETTING VIEWPORT DIEMNSIONS
// console.log(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
// console.log(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));

function move (e) {
    const vw=window.innerWidth;
    const vh=window.innerHeight;
    let xPos = e.clientX*0.073333;
    let yPos = e.clientY * 0.157480;

    if(vw<=957){
        container.style.color="red"
        xPos = e.clientX*0.3448275
    }
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


console.log(document.documentElement.clientWidth);
console.log(window.innerWidth)