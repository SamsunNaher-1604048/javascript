const button = document.querySelector(".button1");
const p1 = document.querySelector(".p1");

  button.addEventListener('click',showuser)

  function showuser(){
      p1.textContent='hello'
     setTimeout(()=>{
         p1.textContent=" "

      },2000)
  }

 button.addEventListener('click',Setcount)

 function Setcount(){
    let count=1
    p1.textContent=count
   setInterval(()=>{
     count++
     p1.textContent=count

   },1000)
 }
button.addEventListener("click", Showclock);

function Showclock() {
  let date = new Date();
  let hour = date.getHours();
  let minite = date.getMinutes();
  let second = date.getSeconds();
  let time = hour + ":" + minite + ":" + second;
  p1.textContent=time;
  setInterval(Showclock, 1000);
}

// <button class="button1">Save</button>
// <p class="p1"></p>