let button=document.getElementById("btn")
button.addEventListener("click",()=>{
    document.querySelector(".box").
    innerHTML="<b>I have created successfully</b> "
})
button.assEventListener("contextmenu",()=>{
    alert("Dont hack us by righty click please")
})
document.addEventListener("keydown",e=>{
    console.log(e.key)
})