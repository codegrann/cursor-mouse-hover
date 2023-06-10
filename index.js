let container = document.querySelector("#container");

// Adding eventlisteners
container.addEventListener('mousemove', move)
container.addEventListener('mouseover', move)
container.addEventListener('click', move)

// GETTING VIEWPORT DIEMNSIONS
// console.log(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
// console.log(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));

function move(e) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let xPos = e.clientX * 0.07259957;
    let yPos = e.clientY * 0.1551493;

    // setting x positions based on viewport width
    // xPos = vw <= 290 ? e.clientX * 0.3448275 : 30;
    // xPos = vw < 320 ? e.clientX * 0.3333333 : 30
    // xPos = vw < 370 ? e.clientX * 0.3125 : 30;
    // xPos = vw < 480 ? e.clientX * 0.2702702 : 30;
    // xPos = vw < 600 ? e.clientX * 0.2083333 : 30;
    // xPos = vw < 768 ? e.clientX * 0.1666666 : 30;
    // xPos = vw < 900 ? e.clientX * 0.1302083 : 30;
    // xPos = vw < 1024 ? e.clientX * 0.1111111 : 30;
    // xPos = vw < 1200 ? e.clientX * 0.0976563 : 30;
    // xPos = vw < 1800 ? e.clientX * 0.0833333 : 30;
    // xPos = vw > 1800 ? e.clientX * 0.0555555 : e.clientX;

    // yPos = vh <= 529 ? e.clientY * 0.1890359 : e.clientY;



    follow1.style.top = `${yPos}%`;
    follow1.style.left = `${xPos}%`;
    // moving box2
    follow2.style.top = `${yPos}%`;
    follow2.style.left = `${xPos}%`;
    // moving box3
    follow3.style.top = `${yPos}%`;
    follow3.style.left = `${xPos}%`;
    console.log(e.clientX)
}


console.log(document.documentElement.clientWidth);
console.log(window.innerWidth)

// func()
// function(){
    // console.log("function")
// }
// func()


const user={
    name:'John',
    address:{
        street:'123 Main St',
        city: 'New York',
        country: 'USA'
    }
}