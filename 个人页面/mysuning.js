if(localStorage.loginID){
    document.querySelector('.user-name-span').innerHTML=JSON.parse(localStorage.loginID)
}
let myOrder=document.querySelector('.my-order')
let orderBox=document.querySelectorAll('.orderBox')[0]

// localStorage.order=JSON.stringify([{
//     img:'https://imgservice.suning.cn/uimg1/b2c/image/eAJWLmK19xCbC26pT7BGwQ.jpg_800w_800h_4e',
//     Message:'美的(Midea)606L对开门冰箱一级能效双变频净味抑菌智能WIFI风冷无霜家用大容量BCD-606WKPZM(E)',
//     model:'【宽911】650升 母婴抑菌 靓彩',
//     price:'2999',
//     num:'1',
//     sum:'2999'
// }])
// localStorage.removeItem(order)
let ordersCreat = () => {
    orderBox.style.display = "block"
    let orderBoxs = orderBox.cloneNode(true)
    myOrder.appendChild(orderBoxs)
}
    let order=JSON.parse(localStorage.order)
    console.log(order);
for(let i=1,len=order.length;i<len+1;i++){
    ordersCreat()
    let orderImg=document.querySelectorAll('.orderImg')
    let orderMessage=document.querySelectorAll('.orderMessage')
    let orderPrice=document.querySelectorAll('.orderPrice')
    let orderDetail=document.querySelectorAll('.orderDetail')
    let orderImgBox=document.querySelectorAll('.orderImgBox')
    orderDetail[i].onclick=()=>{
        localStorage.orderID=JSON.stringify(order[i-1])
        window.open('item.html')
    }
    orderImgBox[i].onclick=()=>{
        localStorage.orderID=JSON.stringify(order[i-1])
        window.open('item.html')
    }
    orderImg[i].src=order[i-1].img
    orderMessage[i].innerHTML=order[i-1].Message
    orderPrice[i].innerHTML="￥"+order[i-1].price
}
orderBox.style.display="none"