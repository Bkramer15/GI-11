
let num = [2,3,4,5,5];
function totalSum(num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum = sum + num[i];
    }
    return sum;
}

console.log(totalSum(num));



let num = [2,4,6]