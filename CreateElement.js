const newelement=document.createElement('p')
const newdata=document.createTextNode("goodbuy")
newelement.appendChild(newdata);

const element=document.getElementById("div1")
element.append(newelement)