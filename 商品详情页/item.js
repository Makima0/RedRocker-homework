let itemImg=document.querySelector('.itemImg')
let bigger=document.querySelector('.bigger')
let itemMessage=document.querySelector('.message')
let price=document.querySelector(".price")
if(localStorage.itemData){
    let itemData=JSON.parse(localStorage.itemData)
    document.querySelector('title').innerHTML=itemData.Message
    itemImg.src=itemData.img
    bigger.src=itemData.img
    price.innerHTML="<i>￥</i>"+itemData.price
    itemMessage.innerHTML=itemData.Message
}
//放大镜(引用自网络)
let imgzoomPop=document.querySelector('.imgzoom-pop')
let imgzoomShot=document.querySelector('.imgzoom-shot')
let wrapper=document.querySelector('.wrapper')
let proinfoLeft=document.getElementById('fakebox')
let proinfoLeft1=document.querySelector('.proinfo-left')
proinfoLeft.addEventListener('mouseover',()=>{
    imgzoomPop.style.display="block"
    imgzoomShot.style.display="block"
    proinfoLeft1.style.zIndex="5"
})
proinfoLeft.addEventListener('mouseout',()=>{
    imgzoomPop.style.display="none"
    imgzoomShot.style.display="none"
    proinfoLeft1.style.zIndex="1"
})
itemImg.addEventListener('mousemove',move)
imgzoomShot.addEventListener('mousemove',move)
function move(e){
    e = e || window.event;
    let moveX = e.pageX - wrapper.offsetLeft
    let moveY = e.pageY - wrapper.offsetTop
    moveX-= imgzoomShot.offsetWidth /2
    moveY-= imgzoomShot.offsetHeight /2
    moveX = moveX < 0 ? 0 : moveX;
    moveX = moveX > 200 ? 200 :moveX;
    moveY = moveY < 0 ? 0 : moveY;
    moveY = moveY > 200 ? 200 : moveY;
    imgzoomShot.style.left = moveX + 'px'
    imgzoomShot.style.top = moveY + 'px'
    bigger.style.left = -moveX * imgzoomPop.offsetWidth / imgzoomShot.offsetWidth + 'px';
    bigger.style.top = -moveY * imgzoomPop.offsetHeight / imgzoomShot.offsetHeight + 'px';
}
let items=JSON.parse(localStorage.itemData)
let buyNum=document.getElementById('buyNum')
console.log(items);
// localStorage.removeItem('item')
let addCart=document.getElementById('addCart').addEventListener("click",()=>{
    items.num=buyNum.value
    items.sum=buyNum.value * items.price
    console.log(items);
    if(localStorage.item){
        let AllItemData=JSON.parse(localStorage.item)
        let itemData=[...AllItemData]
        let flag=0
            for(let i=0,len=itemData.length;i<len;i++){
                // console.log(JSON.stringify(items));
                // console.log(JSON.stringify(AllItemData[i]));
                if(JSON.stringify(items)===JSON.stringify(itemData[i])){
                    
                }else{
                    flag++               
                }
                if(flag===len){
                    itemData.push(items)
                    localStorage.item=JSON.stringify(itemData)
                }
                console.log(flag);
            }
            console.log(JSON.parse(localStorage.item))
            ;}
    else{
        localStorage.item=JSON.stringify([items])
    }
    console.log(JSON.parse(localStorage.item));
})