window.addEventListener("scroll",function(){
    console.log("scroll")
})

window.addEventListener("resize",function(){
    const width=window.outerWidth
    const hight=window.outerHeight
    console.log(width ,hight)
})