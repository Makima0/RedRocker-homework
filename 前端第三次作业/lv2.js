//lv0
let obj = new Object();
obj.name = '010';
obj.age = 'ybb';
console.log(obj);

let obj1 = {
    name1:'taff',
    DateOfBirth:'1885'
}
console.log(obj1)

function Asoul(name2,age){
    this.name2 = name2
    this.age =age
    this.sayName = function ()  {
        console.log(this.name2)
    }
}
const D = new Asoul('diana','1')
const W = new Asoul('eve','2')
const N = new Asoul('queen','3')
const B = new Asoul('kira','4')
//lv1
function Push(arr) {
   
  arr.push(3)
    return arr
}
let arr1 = Push([1,2])
console.log(arr1);
//lv2
let arr2 =[1,[2,3],[4,5,[6,7,8]],9]
function flatten1(arr) {
    return arr.toString().split(',').map(item => +item)
}
let arr3=flatten1(arr2)
console.log(arr3);

function flatten2(arr){
    let newArr =[];
    for(let i =0,length = arr.length;i < length;i++){
        if(Array.isArray(arr[i])){
            newArr=newArr.contact(flatten2(arr[i]));
        }
        else{newArr.push(arr[i]);

        }
    }
    return newArr;
}
let arr4=flatten2(arr2)
console.log(arr4)