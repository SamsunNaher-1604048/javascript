let arr = [ 3, 26, 1, 2, 3, 44, 57, 87, 1 ];
let fixedArr = fixArray(arr);


function fixArray(arr){
    var array = new Array();
    arr.sort(function(a, b){return a - b});//sort
    console.log(arr)
    
    for(let i=0;i<=arr.length;i++){
        for(let j=i+1;j<=arr.length;j++){
            if(arr[i]===arr[j]){
                break;
            }
            if(arr[i]!==arr[j]){
                array.push(arr[i])
                break
            }
        }
    }
       return array
     
}

console.log(fixedArr)


