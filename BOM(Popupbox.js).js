function DeleteSomething() {
   const value = confirm("are u sure");
   if (value) {
     console.log("delete");
  } else {
     console.log("not delete");
  }
 }
 DeleteSomething();

//prompt

function Shoeprompt(){
    const h1=document.createElement('h1')
    const value=prompt("emter uour mane")
    let text

    if(value==null||value==""){
        text="no name found"
    }else{
        text=value
    }

    const textnode=document.createTextNode(text)
    h1.appendChild(textnode)
    document.body.appendChild(h1)
}

Shoeprompt()

