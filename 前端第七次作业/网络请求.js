let bin=document.querySelector('button').addEventListener('click',async()=>{
let res= await fetch("https://taskapi.chovrio.club/poetry/:56",{
   method :"get"
//    body:JSON.stringify({
//     params:""
   
})
const data=await res.json()
console.log(data);
})
let id
function name(params) {
    if(id<=2528){
        id++
    }
}