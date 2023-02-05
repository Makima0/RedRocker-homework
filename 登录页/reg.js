let regtips=document.querySelector('.reg-protocol')
let agree=document.querySelector('.agree-btn')
agree.addEventListener('click',()=>{
    regtips.style.display="none"
})
//////////电话密码输入////////////
let smsCodetext=document.getElementById('smsCodetext')
let smsCode=document.getElementById('smsCode')
let mobileAliastext=document.getElementById('mobileAliastext')
let mobileAlias=document.getElementById('mobileAlias')
let aliasTip=document.getElementById('aliasTip')
let setPswtext=document.getElementById('setPswtext')
let setPsw=document.getElementById('setPsw')
let ok=document.querySelector('.ok')
let suggestion=document.querySelector('.suggestion')
let pswSuggestion=document.getElementById('pswSuggestion')
let container=document.querySelector('.container')
let btnclose=document.querySelector('.btnclose')
let overlay=document.getElementById('overlay')
let save=document.getElementById('save')
let setPsw_rank=document.getElementById('setPsw_rank')
let level1=document.querySelector('.level1')
let level2=document.querySelector('.level2')
let level3=document.querySelector('.level3')
let pswSuggestiontext1=document.getElementById('em1')
let pswSuggestiontext2=document.getElementById('em2')
let pageChange=document.getElementsByTagName('meta')[1]
let flag1=0//确定注册手机号输入
let flag2=0//密码提示
let flag3=0//密码等级
let flag4=0//密码警告
pswSuggestion.addEventListener('mouseover',()=>{flag2=1})
pswSuggestion.addEventListener('mouseout',()=>{flag2=0})
pswSuggestion.addEventListener('click',()=>{
    container.style.display="block"
    overlay.style.display="block"
})
setPsw.addEventListener('input',()=>{
    setPsw_rank.style.display="block"
    let num= 0;
    let setPswnumber=setPsw.value
    let setPswtip=[]=setPswnumber.split('')
    if(setPswnumber==0){setPsw_rank.style.display="none"}
    if(setPswtip.length>8){
        return flag4=0
    }
    if (setPswtip.length < 8) {
        setPsw_rank.style.display="none"
        return flag4=1
    }
    if (/\d/.test(setPswnumber)) {
        num++;
    }
    if (/[a-z]/.test(setPswnumber)) {
        num++;
    }
    if (/[A-Z]/.test(setPswnumber)) {
        num++;
    }
    if (/\W/.test(setPswnumber)) {
        num++;
    }
    let flag3=num
    if(flag3<2){
        level3.style.background="#f60"
        level2.style.background="#cacaca"
        level1.style.background="#cacaca"
    }
    if(flag3==2){
        level2.style.background="#f60"
        level3.style.background="#cacaca"
        level1.style.background="#cacaca"
        return flag1++
    }
    if(flag3>2){
        level1.style.background="#f60"
        level2.style.background="#cacaca"
        level3.style.background="#cacaca"
        return flag1++
    }
})
setPsw.addEventListener('focus',()=>{
    setPswtext.style.display="none"
    suggestion.style.display="block"
    pswSuggestiontext1.style.display="inline"
    pswSuggestion.style.display="inline"
    pswSuggestiontext2.style.display="none"
    return flag4=0
})
setPsw.addEventListener('blur',()=>{
    if(setPsw.value==0){
        setPswtext.style.display='block'
        pswSuggestiontext2.style.display="none"
    }
    if(flag2==0){
      if(flag4==1){
        pswSuggestiontext1.style.display="none"
        pswSuggestion.style.display="none"
        pswSuggestiontext2.style.color="red"
        pswSuggestiontext2.style.display="block"
      }else{
        suggestion.style.display="none"
      }
    }
},true)
btnclose.addEventListener('click',()=>{
    container.style.display="none" 
    flag2=0
    overlay.style.display="none"
})
smsCode.addEventListener('focus',()=>{
    smsCodetext.style.display="none"
})
smsCode.addEventListener('blur',()=>{
    if(smsCode.value==0){
        smsCodetext.style.display="block"
    }
})
mobileAlias.addEventListener('focus',()=>{
    mobileAliastext.style.display='none'
    let newtext2="验证完成后，您可以使用该手机登录或者找回密码"
    aliasTip.style.display="block"
    aliasTip.innerHTML=newtext2
    aliasTip.style.color="#999"
    ok.style.display="none"
})
mobileAlias.addEventListener("blur",()=>{
    if(mobileAlias.value==''){
        mobileAliastext.style.display="block"
        aliasTip.style.display="none"
    }
    let mobileAliasnumber=mobileAlias.value
    let mobileAliastips=[]=mobileAliasnumber.split('')
    if (mobileAliastips.length==11){
        ok.style.display="block"
        aliasTip.style.display="none"
        flag1++
    }else{
        let newtext1='格式不正确，请您输入正确的手机号。'
        aliasTip.innerHTML=newtext1
        aliasTip.style.color="red"
        flag1=0
    }
    // console.log(mobileAliasnumber);
})
save.addEventListener('click',()=>{
    let newtext3='请输入注册手机'
    aliasTip.style.color="red"
    aliasTip.innerHTML=newtext3
    if(mobileAlias.value==0){
        aliasTip.style.display="block"
    }
})
///////////请求/////////////
save.addEventListener('click', ()=>{
    // if(flag1==1){
        let mobileAliasnumber=mobileAlias.value
        let setPswnumber=setPsw.value
    //     let regRes=await fetch('http://ps7bkb.natappfree.cc/user/register',{
    //         method:'POST',
    //         body:JSON.stringify({
    //             username:mobileAliasnumber,
    //             password:setPswnumber,
    //             confirm_password:setPswnumber
    //         })
    //     })
    //     // let res=await regRes.json()
    //     if(regRes.ok){
    //             alert('注册成功')
    //             pageChange.content="3;url=login.html"
    //         }else{
    //             alert('注册失败,错误原因：'+regRes.status)
    //         }
    // }
    // localStorage.clear()
    if(flag1>1){
        if(localStorage.id){
            let AllId=JSON.parse(localStorage.id)
            let idData=[...AllId]
            idData.push({
                username:mobileAliasnumber,
                password:setPswnumber,
                })
            let idLenth=idData.length
            localStorage.idLenth=JSON.stringify(idLenth)
            localStorage.id=JSON.stringify(idData)
            console.log(JSON.parse(localStorage.idLenth));
            console.log(JSON.parse(localStorage.id))
            }
        else{
            localStorage.id=JSON.stringify([{
                username:mobileAliasnumber,
                password:setPswnumber,
            }])
            console.log(localStorage.id);
        }
            alert('注册成功')
        pageChange.content="3;url=login.html" 
        
    }
}
    // let id=JSON.parse(localStorage.id)
//     const formData = new FormData();
//     formData.append('username', 'username');
//     formData.append('password', '123456');
//     formData.append('confirm_password', '123456');
//     let regRes = fetch('https://c430-112-80-115-240.jp.ngrok.io/user/register', {
//         method: 'POST',
//         header: {
//         'Content-Type': 'multipart/form-data',
//         },
//         body: formData
//     })
//         if(regRes.ok){
//             alert('注册成功')
//             pageChange.content="3;url=login.html"
//         }else{
//             alert('注册失败,错误原因：'+regRes.status)
//         }
//  }
)
