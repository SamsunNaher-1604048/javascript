
//    <button onclick="Addstyle()">Add Style</button>
//    <button onclick="Removestyle()">Remove Style</button>


const Style=document.querySelector("#heading")

function Addstyle(){
  Style.classList.add("para")
}

function Removestyle(){
    Style.classList.remove("para")

}