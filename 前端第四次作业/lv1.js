function sum(n) {
    let num=0
    for(let i=1;i<=n;i++){num += i;}
    return num;
}
console.log(sum(100));

function sum2(n){
    if(n <=1)
    return 1
    else
    return sum2(n-1)+n
    
}
console.log(sum2(100));