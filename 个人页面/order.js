let orderItem=document.querySelectorAll('.orderItem')[0]
let wrapBox=document.querySelector('.wrap-box')
let order=JSON.parse(localStorage.order)
let ordersCreat = () => {
    orderItem.style.display = "block"
    let orderItems = orderItem.cloneNode(true)
    wrapBox.appendChild(orderItems)
}
console.log(order);
for(let i=1,len=order.length;i<len+1;i++){
    ordersCreat()
    // let orderImg=document.querySelectorAll('.orderImg')
    // let orderMessage=document.querySelectorAll('.orderMessage')
    // let orderPrice=document.querySelectorAll('.orderPrice')
    // let orderDetail=document.querySelectorAll('.orderDetail')
    // let orderImgBox=document.querySelectorAll('.orderImgBox')
    // orderDetail[i].onclick=()=>{
    //     localStorage.orderID=JSON.stringify(order[i-1])
    //     window.open('item.html')
    // }
    // orderImgBox[i].onclick=()=>{
    //     localStorage.orderID=JSON.stringify(order[i-1])
    //     window.open('item.html')
    // }
    let orderMessage=document.querySelectorAll('.orderMessage')
    let orderPrice=document.querySelectorAll('.orderPrice')
    let orderNum=document.querySelectorAll('.orderNum')
    let orderSum=document.querySelectorAll('.ordersum')
    let orderImg=document.querySelectorAll('.goodsImg')
    orderImg[i].src=order[i-1].img
    orderMessage[i].innerHTML=order[i-1].Message
    orderPrice[i].innerHTML=order[i-1].price
    orderNum[i].innerHTML=order[i-1].num
    orderSum[i].innerHTML=order[i-1].sum
}
//取消订单
let newOrderItem=document.querySelectorAll('.orderItem')
let orderDe=document.querySelectorAll('.orderDe')
for ( let i = 0; i <order.length+1; i++) {
    let newOrderItem1=newOrderItem[i]
    let index=i
    let newAllOrder=[]
    orderDe[i].addEventListener('click',()=>{
        newOrderItem1.parentNode.removeChild(newOrderItem1)
        delete order[index-1]
        for(let n=0;n<order.length;n++){
            if(order[n]){
                newAllOrder.push(order[n])
            }
        }
        localStorage.order=JSON.stringify(newAllOrder)
        console.log(JSON.parse(localStorage.order));
    })
}
orderItem.style.display="none"