document.querySelector('#button').addEventListener('click',()=>{
    var input=document.querySelector("#input").value
    try{
        if(input<5){
            throw "this is too low"
        }
        else if(input>10){
            throw "imput is too high"
        }
    } catch(error){
        console.log(error)
    }
    finally{
        console.log("input is "+input)
    }
})

//html
{/* <p>enter value between 5 to 10</p>
<input type="text" id="input"/>
<button id="button">Click</button> */}