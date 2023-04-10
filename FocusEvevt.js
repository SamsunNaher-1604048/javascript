const input=document.querySelector("#input")
input.addEventListener('blur',function(e){
    input.style.backgroundColor="white"
    console.log(e.target.value)
    input.value=e.target.value.toUpperCase()
})
input.addEventListener('focus',function(){
    input.style.backgroundColor="pink"
})
input.addEventListener('focusin',function(){
     console.log("focusin is occure")
 })
 input.addEventListener('focusout',function(){
     console.log("focusout is occure")
})
//html
//  <input type="text" id="input">