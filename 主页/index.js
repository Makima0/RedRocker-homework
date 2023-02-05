// //////////////窗口变化/////////
// let address=document.getElementById('address')
// let gongshi=document.querySelector('.ng-nav-right-wenjuan')
// let ngToolbar=document.querySelector('.ng-toolbar')
// let firstRight=document.querySelector('.first-right')
// window.addEventListener('resize',()=>{
//     if(window.innerWidth<1206){
//     address.style.display="none"
//     gongshi.style.display="none"
//     firstRight.style.display="none"
//     }else{
//         address.style.display="block"
//         gongshi.style.display="block"
//         firstRight.style.display="block"
//     }
// })
//////////轮播页/////////////
let bannerbox=document.querySelector('.bannerbox')
let bannerimg=bannerbox.querySelectorAll('img')
let index=0
let leftbtn=document.querySelector('.btn-left')
let rightbtn=document.querySelector('.btn-right')
let pageItem=document.querySelectorAll('.page-item')
let bannerbackground=[
    "rgb(182, 34, 46)",
    "rgb(61, 176, 243)",
    "rgb(144, 55, 37)",
    "rgb(61, 176, 243)",
    "rgb(172, 147, 215)",
    "rgb(132, 12, 14)",
    "rgb(114, 129, 246)",
    "rgb(235, 235, 235)"]
bannerbox.addEventListener('mouseover',()=>{
    leftbtn.style.display="inline"
    rightbtn.style.display="inline"
})
bannerbox.addEventListener('mouseout',()=>{
    leftbtn.style.display="none"
    rightbtn.style.display="none"
})
leftbtn.addEventListener('click',()=>{
    bannerimgclear()
    if(index==0){
        bannerimg[7].style.zIndex="1"
        bannerbox.style.backgroundColor=bannerbackground[7]
        pageItem[7].style.background="#ff8000"
        return index=7
    }else{
        index--
        bannerimg[index].style.zIndex="1"
        bannerbox.style.backgroundColor=bannerbackground[index]
        pageItem[index].style.background="#ff8000"
        return index
    }
})
rightbtn.addEventListener('click',imgright)
let bannerimgclear=()=>{
    for(i=0;i<8;i++){
        bannerimg[i].style.zIndex="-1"
        pageItem[i].style.background="rgba(255,255,255,0.5)"
    }
}
function imgright(){
    bannerimgclear()
    if(index==7){
        bannerimg[0].style.zIndex="1"
        bannerbox.style.backgroundColor=bannerbackground[0]
        pageItem[0].style.background="#ff8000"
        return index=0
    }else{
        index++
        bannerimg[index].style.zIndex="1"
        bannerbox.style.backgroundColor=bannerbackground[index]
        pageItem[index].style.background="#ff8000"
        return index
    }
}
let bannermove=()=>{
    pageItem[0].style.background="#ff8000"
    bannerbox.style.transition=".5s"
    setInterval(()=>{
        imgright()
    }
    ,3000)
}
bannermove()
////////////////搜索//////////////
let searchKeyword=document.querySelector('.search-keyword')
searchKeyword.addEventListener('focus',()=>{
    searchKeyword.value=''
})
searchKeyword.addEventListener('blur',()=>{
    searchKeyword.value='爆款每1000减100'
})
/////////////侧边工具栏///////////
let snSidebarTab=document.querySelectorAll('.sn-sidebar-tab')
let newMessage=document.getElementsByName('public0_none_cblnew_message')[0]
let tabTip=document.querySelectorAll('.tab-tip')
let backTop=document.getElementsByName('public0_none_cblnew_back')[0]
newMessage.addEventListener('mouseover',()=>{
    tabTip[0].style.transform="translate(-47px, 0px)"
    tabTip[0].style.backgroundColor="#ffaa01"
    tabTip[0].style.color="#383838"
})
newMessage.addEventListener('mouseleave',()=>{
    tabTip[0].style.transform="translate(0px, 0px)"
    tabTip[0].style.backgroundColor="#383838"
    tabTip[0].style.color="#ffaa01"
})
backTop.addEventListener('mouseover',()=>{
    tabTip[1].style.transform="translate(-67px, 0px)"
    tabTip[1].style.backgroundColor="#ffaa01"
    tabTip[1].style.color="#383838"
})
backTop.addEventListener("mouseleave",()=>{
    tabTip[1].style.transform="translate(0px, 0px)"
    tabTip[1].style.backgroundColor="#383838"
    tabTip[1].style.color="#ffaa01"
})
////////////用户数据/////////////
let hasLogin=document.querySelector(".has-login")
let notLogin=document.querySelector('.not-login')
let Hi=document.querySelectorAll('.hi')
function getLocalStorage(){
    if(localStorage.loginID){
        hasLogin.style.display="block"
        notLogin.style.display="none"
        Hi[1].innerHTML="Hi,"+JSON.parse(localStorage.loginID)
    }
    if(localStorage.item){
        let itmeData=localStorage.item
        document.querySelector('.tab-cart-num').innerHTML=itmeData.length
    }
}
getLocalStorage()
/////////推荐部分////////////
let recBox=document.querySelector('.recclearfix')
let n=0
let i=0
// let times=0
// let flag=0
let itemData=[]
let itemDataa={
    img:'https://imgservice.suning.cn/uimg1/b2c/image/akns3dht6NK-1RYjf1j0cQ.jpg_800w_800h_4e',
    Message:'美的(Midea)波轮洗衣机全自动家用9公斤大容量宿舍出租房用 可单脱水健康免清洗MB90V37E',
    model:'【镇店必买】美的9kg波轮洗衣机',
    price:'799',
    num:'',
    sum:''
}
let itemDatab={
    img:'https://imgservice.suning.cn/uimg1/b2c/image/bfI3uEMBt4Z7Jfce9ZFAVA.jpg_800w_800h_4e',
    Message:'海尔(Haier)10公斤 大容量 全自动家用 滚筒洗衣机 智能变频除菌 EG100MATE2S',
    model:'10KG变频除菌【全网爆款】',
    price:'1949.00',
    num:'',
    sum:''
}
let itemDatac={
    img:'https://imgservice.suning.cn/uimg1/b2c/image/aETidqv8ModJFta0Fa7c2A.jpg_800w_800h_4e',
    Message:'海尔(Haier)8公斤 全自动家用波轮洗衣机 租房宿舍 小型洗衣机 洗脱一体 EB80M20Mate1',
    model:'8KG全自动【全网爆款】',
    price:'899.00',
    num:'',
    sum:''
}
let itemDatad={
    img:'https://imgservice.suning.cn/uimg1/b2c/image/R3T38s3NNsgtjVF_I_XsEQ.png_800w_800h_4e',
    Message:'海尔(Haier)216升 三门冰箱 中门软冷冻 三门三温区 低音节能 低温补偿 直冷小冰箱 BCD-216STPT',
    model:'【热销爆款】216升-中门软冷冻',
    price:'1339.00',
    num:'',
    sum:''
}
let itemDatae={
    img:'https://imgservice.suning.cn/uimg1/b2c/image/eAJWLmK19xCbC26pT7BGwQ.jpg_800w_800h_4e',
    Message:'美的(Midea)606L对开门冰箱一级能效双变频净味抑菌智能WIFI风冷无霜家用大容量BCD-606WKPZM(E)',
    model:'【宽911】606升 超级爆款 深层速冷',
    price:'2999.00',
    num:'',
    sum:''
}
let itemDataf={
    img:'https://imgservice.suning.cn/uimg1/b2c/image/qcfVqAagXz1yzeBlG50Geg.jpg_800w_800h_4e',
    Message:'Haier/海尔 532L对开门冰箱 智能家电 风冷无霜 大容量变频一级 嵌入冰箱 BCD-532WGHSS8EL9U1',
    model:'【超级爆款】532升-一级能效 纤薄机身',
    price:'3699.00',
    num:'',
    sum:''
}
let recCreat=()=>{
    n++
    let recli=document.createElement('li')
    recBox.appendChild(recli)
    let recGoods=document.createElement('a')
    recGoods.className="itemID"
    recli.appendChild(recGoods)
    let recGoodsimg=document.createElement('img')
    recGoods.appendChild(recGoodsimg)
    let recGoodstitle=document.createElement('p')
    recGoodstitle.className="title"
    recGoods.appendChild(recGoodstitle)
    let recPriceBox=document.createElement('p')
    recPriceBox.className="price-box"
    recGoods.appendChild(recPriceBox)
    let recPrice=document.createElement('span')
    recPrice.className="price"
    recPriceBox.appendChild(recPrice)
    let recPriceI=document.createElement('i')
    recPrice.appendChild(recPriceI)
    let recPriceEm=document.createElement('em')
    recPrice.appendChild(recPriceEm)
    let recCxIcon=document.createElement('p')
    recCxIcon.className="cxIcon"
    recGoods.appendChild(recCxIcon)
    let recCxcontent=document.createElement('span')
    recCxIcon.appendChild(recCxcontent)
    recGoods.href="javascript:;"
    function recCreatcontent(itemName){
        recGoodsimg.src=itemName.img
        recGoodstitle.innerHTML=itemName.Message
        recPrice.innerHTML="￥"+itemName.price
    }
    if(i==0){
        recCreatcontent(itemDataa)
        itemDataCreat(itemDataa)
        i++
        stop()
    }
    if(i==1){
        recCreatcontent(itemDatab)
        itemDataCreat(itemDatab)
        i++
        stop()
    }
    if(i==2){
        recCreatcontent(itemDatac)
        itemDataCreat(itemDatac)
        i++
        stop()
    }
    if(i==3){
        recCreatcontent(itemDatad)
        itemDataCreat(itemDatac)
        i++
        stop()
    }
    if(i==4){
        recCreatcontent(itemDatae)
        itemDataCreat(itemDatae)
        i++
        stop()
    }
    if(i==5){
        recCreatcontent(itemDataf)
        itemDataCreat(itemDataf)
        i=0
        times=1
        stop()
    }
    function itemDataCreat(itemName){
            itemData.push(itemName)
            // console.log(itemData);
        }
    function stop(){
        if(n==100){
            // console.log(n);
            return
        }else{
            recCreat()
        }
    }
}
recCreat()
// console.log(itemData)
let itemID=document.querySelectorAll('.itemID')
for(let i=0,len=itemData.length; i<len ; i++){
    let itemData1=itemData[i]
    itemID[i].onclick=()=>{
        localStorage.itemData=JSON.stringify(itemData1)
        itemID[i].href="item.html"
    }
}

