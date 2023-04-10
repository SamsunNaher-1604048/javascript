console.log(location.href)
console.log(location.protocol)
console.log(location.hostname)
console.log(location.port)

const div1=document.querySelector(".div1")
const p1=div1.children[0]
const p2=div1.children[1]
const p3=div1.children[2]
p1.textContent=location.href
p2.textContent=location.protocol
p3.textContent=location.port

//html
{/* <h1>BOM</h1>
<div class="div1">
  <p></p>
  <P></P>
  <P></P>
</div> */}

