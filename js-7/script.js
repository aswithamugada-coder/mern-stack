let boxes=document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor="red";
document.getElementById("blue").style.backgroundColor="blue";
document.querySelector(".box").style.backgroundColor="violet";
console.log(document.querySelectorAll(".box"));
document.querySelectorAll(".box")[1].style.backgroundColor="yellow";
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="yellow";
})
