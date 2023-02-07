let progressBar1=document.querySelector('.progressBar1')
let progressBar2=document.querySelector('.progressBar2')
let progressBar3=document.querySelector('.progressBar3')
let progressBar4=document.querySelector('.progressBar4')

let AllItem=JSON.parse(localStorage.order)
let itembox = document.querySelector('.goods-info-container')
let itmes = document.querySelectorAll('.item')[0]
let itmesCreat = () => {
    itmes.style.display = "block"
    let item = itmes.cloneNode(true)
    itembox.appendChild(item)
}
for(i=1;i<AllItem.length+1;i++){
    itmesCreat()
    console.log(111);
    let newItem = document.querySelectorAll('.item')
    let itemImg=document.querySelectorAll('.itemImg')
    let itemInfo=document.querySelectorAll('.item-info')
    let itemModel=document.querySelectorAll('.td-specs')
    let itemprice=document.querySelectorAll('.td-price')
    let itemtdAmount=document.querySelectorAll('.td-amount')
    let itemSum=document.querySelectorAll('.sum')
    itemImg[i].src=AllItem[i-1].img
    itemInfo[i].innerHTML=AllItem[i-1].Message
    itemModel[i].innerHTML=AllItem[i-1].model
    itemprice[i].innerHTML=AllItem[i-1].price
    itemtdAmount[i].innerHTML=AllItem[i-1].num
    itemSum[i].innerHTML=AllItem[i-1].sum
}
let itemDe=document.querySelectorAll('.delateBtn')
let newItem = document.querySelectorAll('.item')
for ( let i = 0; i <AllItem.length+1; i++) {
    let newItem1=newItem[i]
    let index=i
    let newAllItem=[]
    itemDe[i].addEventListener('click',()=>{
        newItem1.parentNode.removeChild(newItem1)
        delete AllItem[index-1]
        for(let n=0;n<AllItem.length;n++){
            if(AllItem[n]){
                newAllItem.push(AllItem[n])
            }
        }
        localStorage.order=JSON.stringify(newAllItem)
    })
}
let checked= document.querySelectorAll('.pay-item')
for(let i=0;i<checked.length;i++){
    console.log(111);
    checked[i].addEventListener('click',()=>{
        console.log(i);
        checked[i].style.borderColor="#f60;"
    })
}
let payAmountID=document.getElementById('payAmountID')
if(localStorage.check){
    payAmountID.innerHTML=JSON.parse(localStorage.check)
}
let ORCodebox=document.querySelector('.OR-codebox')
let wrapper=document.querySelector('.mt10')
let submitBtn=document.querySelector('.submit-btn').addEventListener('click',()=>{
    wrapper.style.display="none"
    progressBar3.style.backgroundPositionX="-10px"
    progressBar3.style.backgroundPositionY ="-26px"
    progressBar3.style.width="158px"
    progressBar3.style.left="-74px"
    ORCodebox.style.display="flex"
})

itmes.style.display = "none"