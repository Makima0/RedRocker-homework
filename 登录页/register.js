//提交注册
save.addEventListener('click', async()=>{
    let mobileAliasnumber=mobileAlias.value//获取电话号码的值
    let setPswnumber=setPsw.value//获取密码的值
    //fetch函数网络请求
    let regRes=await fetch('https://c430-112-80-115-240.jp.ngrok.io/user/register',{
        method:'POST',
        body:JSON.stringify({
            username:mobileAliasnumber,
            password:setPswnumber,
            confirm_password:setPswnumber
        })
    })
    // let res=await regRes.json()
    //反馈
    if(regRes.ok){
            alert('注册成功')
        }else{
            alert('注册失败,错误原因：'+regRes.status)
        }
 }
)