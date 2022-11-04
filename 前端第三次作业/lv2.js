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
