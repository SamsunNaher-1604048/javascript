//html for input
{/* <label for="name"
>Nmae:
<input type="text" name="name" />
</label> */}

var input=document.querySelector('input')
input.addEventListener("change",Changetext)

function Changetext(e){
 console.log(e.target.value)
}

//html for checkbox
{/* <div>
      <label for="programm">
        C
        <input type="checkbox" name="programm" class="check" value="C" />
      </label>
      <label for="programm">
        java
        <input type="checkbox" name="programm" class="check" value="java"/>
      </label>
</div> */}

//checkbox
 var checkbox=document.querySelectorAll("input[name=programm]")
console.log(typeof(checkbox))


Array.from(checkbox).map((check)=>{
    check.addEventListener("change",onCheck)
})

function onCheck(e){
    if(e.target.checked){
        console.log(e.target.value)
    }
}

//selector input html
{/* <div>
<label for="depart">
    Department:
    <select name="depart" id="depart">
        <option value="cse">cse</option>
        <option value="eee">eee</option>
    </select>
</label>
</div> */}
//seect

const select=document.querySelector("#depart")
select.addEventListener("change",Selector)
 function Selector(e){
    console.log(e.target.value)

 }
 
 