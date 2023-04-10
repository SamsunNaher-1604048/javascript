console.log("welcome")
const promices1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve('promice1 resolve')
    },3000)

})

const promices2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('promice2 resolve')
     },1000)
 
})

Promise.all([promices1,promices2]).then((res)=>{
    console.log(res)
}).catch((err)=>{
 console.log(err)
})

Promise.race([promices1,promices2]).then((res)=>{
    console.log(res)
}).catch((err)=>{
 console.log(err)
})
console.log("end")