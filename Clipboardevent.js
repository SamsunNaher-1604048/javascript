const input=document.querySelector("#input")
const p=document.querySelector("#p")
input.addEventListener('copy',function(){
    p.innerText="copy"
    console.log("copy")
})
input.addEventListener('cut',function(){
    console.log("cut")
})
input.addEventListener('paste',function(){
    console.log("paste")
})
//html
{/* <p id="p"></p>
<input type="text" id="input"> */}