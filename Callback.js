function squre(x){
    console.log(x*x)
}

function higherorder(number,callbak){
    callbak(number)

}
higherorder(4,squre)