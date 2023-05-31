let followCursor=document.querySelector("#follow");
let container=document.querySelector("#txt");
// followCursor.onmouseout=function(e){
    // console.log(e.target);
    // console.log(e.clientX , e.clientY);
// }

container.onmouseover=function(e){
    // console.log(e.target);
    let xPos=e.clientX;
    let yPos=e.clientY;
    let red="red";
    console.log(xPos , yPos);
    followCursor.style.left=`${xPos}`;
    followCursor.style.top=`${xPos}`;
    followCursor.style.color=`${red}`;
}


console.log("It is not working");
