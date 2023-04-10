const task1=()=>{
    return new Promise((resolve,reject)=>{
        resolve("Task1 is resolve")
    })
}
const task2=()=>{
    return new Promise((resolve,reject)=>{
        resolve("Task2 is resolve")
    })
}
const task3=()=>{
    return new Promise((resolve,reject)=>{
        resolve("Task3 is resolve")
    })
}

task1().then((res)=>{
    console.log(res)
})
.then(task2)
.then((res)=>console.log(res))
.then(task3)
.then((res)=>console.log(res))