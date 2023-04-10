//    <button id="button">Click me</button>

document.querySelector("#button").addEventListener("click",Addfunction)

function Addfunction(){
    alert("hello")
}

var head= document.querySelector("#heading")
head.addEventListener("mouseover",()=>{
    head.classList.add('para')
})

head.addEventListener("mouseout",()=>{
    head.classList.remove('para')
})
