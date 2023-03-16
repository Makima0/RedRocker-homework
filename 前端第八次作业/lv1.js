function sum(a, b, c) {
  return  a + b + c;
}

function curriedSum(a){
    let args1=[...arguments]
    args1.length==3 && sum(args1[0],args1[1],args1[2])
    return function(b){
        let args2=[...arguments]
        console.log(args2);
        let args3=[...args1,...args2]
        curriedSum.call(this,...args3)
        return function(c){
            return a+b+c
        }
    }
}
// alert( curriedSum(1, 2, 3) ); // 6，仍然可以被正常调用
// alert( curriedSum(1)(2,3) ); // 6，对第一个参数的柯里化
// alert( curriedSum(1)(2)(3) ); // 6，全柯里化

//写一个curry函数来实现此功能