const div=document.querySelector("div")
console.log(div)

div.addEventListener('click',function(e){
   console.log(e.target.id)
   console.log(e.target.innerHTML)
   console.log(e.target.textContent)
})

const buttons=document.querySelectorAll(".btn")


Array.from(buttons).map((button)=>{
   button.addEventListener('click',function(e){
      console.log(e.target.innerText)
   })

})
//html
{/* <div style="background-color:red;height: 100px;width: 100px;" id="dv1">
      <p>i am a div</p>
      <button class="btn">btn1</button>
      <button class="btn">btn2</button>
      <button class="btn">btn3</button>
    </div> */}