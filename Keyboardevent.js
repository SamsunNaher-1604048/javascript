const textarea=document.querySelector("#textarea")

textarea.addEventListener('keydown',function(e){
    console.log("keydown")
    console.log(e.key)
})
textarea.addEventListener('keypress',function(e){
    console.log("keypress")
    console.log(e.key)
})
textarea.addEventListener('keyup',function(e){
    console.log("keyup")
    console.log(e.key)
})

//html
{/* <textarea id="textarea" rows="10" cols="30"></textarea> */}