
    // <button onclick="Setimage1()" >tree image</button>
    // <button onclick="Setimage2()" >natural image</button>
    // <img id="img" src="1.jpg" alt=" " height="300px" width="300px"/>

function mymessage(){
    alert("hello");
}
function Mymessage2(){
   alert("para")
}

function Message3(){
    const select=document.querySelector("#para1")
    select.innerHTML="this is click"
}

function Setimage1(){
    const img = document.querySelector("#img")
    img.src="1.jpg"
}
function Setimage2(){
    const img = document.querySelector("#img")
    img.src="2.jpg"
}