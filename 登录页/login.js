/////////////////////登录方式的选择/////////////////////
let account=document.querySelector('.account')
let code=document.querySelector('.code')
let i1=account.querySelector('i')
let i2=code.querySelector('i')
let pclogin=document.querySelector('.pclogin')
let scanlogin=document.querySelector('.scanlogin')
code.addEventListener('click',tab1)
account.addEventListener('click',scanErrorTip)
account.addEventListener('click',tab2)
function tab1(){
    i2.style.display="inline"
    i1.style.display="none"
    account.style.color="#333"
    this.style.color="#f60"
    pclogin.style.display="none"
    scanlogin.style.display="block"
}
function tab2(){
    i1.style.display="block"
    i2.style.display="none"
    code.style.color="#333"
    this.style.color="#f60"
    scanlogin.style.display="none"
    pclogin.style.display="block"
}

///////////////////二维码登录///////////////////
//1.二维码移动
let qrcodetip=document.querySelector(".qrcodetip")
let qrcode=document.querySelector(".qrcode")
let scanbox=document.querySelector(".scan-box")
scanbox.addEventListener('mouseleave', ()=>{
    qrcodetip.style.display="none"
    qrcode.style.transform="translate(0px, 0px)"
})
scanbox.addEventListener('mouseenter',()=>{
    qrcode.style.transform="translate(-76px, 0px)"
    qrcode.style.transition="0.3s"
    if(qrcode.style.display==="block"){
        setTimeout(()=>{
        if(qrcode.style.transform==="translate(-76px, 0px)"){
        qrcodetip.style.display="block"}},300)
    }
})
//2.二维码报错
let mask=document.querySelector(".mask")
let CheckRefresh=mask.querySelector('a').addEventListener('click',()=>{
    qrcode.style.display="block"
    mask.style.display="none"
    scanErrorTip()
})
function scanErrorTip(){
    if(i2.style.display="none"){
        return 0
    }else{
        setTimeout(()=>{ 
            qrcode.style.display="none"
            qrcodetip.style.display="none"
            mask.style.display="block"},180000)
            scanErrorTip()
    }
}
scanErrorTip()

/////////////////////账户登录////////////////////
let labelU=document.querySelector('.defaultU')
let username=document.getElementById("usn")
let labelP=document.querySelector('.defaultP')
let password=document.getElementById("paw")
let pageChange=document.getElementsByTagName('meta')[1]
let flag=0//验证登录
let submit=document.getElementById("submit").addEventListener('click',()=>{
    let usernameNumber=username.value
    let passwordNumber=password.value
    let loginID=JSON.stringify({
        username:usernameNumber,
        password:passwordNumber,
    })
    // let loginres=await fetch("--",{
    //     method:"post",
    //     body:JSON.stringify({
    //         username:usernameNumber,
    //         password:passwordNumber
    //     })
    // })
    // let res=await loginres.json()
    if(localStorage.id){
        let idData=[]=JSON.parse(localStorage.id)
        // console.log(idData);
        // console.log(idData[0])
        let idLength=JSON.parse(localStorage.idLength)
        // console.log(idLenth);
        for(i=0;i<=idLength;i++){
            if(loginID==JSON.stringify(idData[i])){
                flag=1
            }
        }
        if(flag==1){
            localStorage.loginID=JSON.stringify(usernameNumber)
            alert('登录成功')
            pageChange.content="3;url=index.html"
        }else{
            alert('登录失败，是不是输错了')
        }
    }else{
        alert('您还没有注册')
        pageChange.content="3;url=reg.html"
    }
})
username.addEventListener('focus',()=>{
    labelU.style.display="none"
})
username.addEventListener('blur',()=>{
    if(username.value==""){labelU.style.display="inline"}
    else(labelU.style.display="none")
})
password.addEventListener('focus',()=>{
    labelP.style.display="none"
})
password.addEventListener('blur',()=>{
    if(password.value==""){labelP.style.display="inline"}
    else(labelP.style.display="none")
})
