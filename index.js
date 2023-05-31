let followCursor=document.querySelector("#follow");
let container=document.querySelector("#txt");
// followCursor.onmouseout=function(e){
    // console.log(e.target);
    // console.log(e.clientX , e.clientY);
// }

container.onmouseover=function(e){
    console.log(e.target);
    console.log(e.clientX , e.clientY);
    followCursor.style.left=e.clientX;
}


console.log("It is not working");
