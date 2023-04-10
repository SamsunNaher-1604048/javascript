function addNumber(x,y,z){
    console.log(x+y+z)
}
 let number=[1,2,3,4]
 addNumber(...number)

 let numder1=[7,8,9,...number]
 console.log(numder1)

 let number3=[9,0,8]
 let number4=[5,8,7]

 let numder5=[...number3,...number4]
 console.log(numder5)