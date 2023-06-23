let locationtxt=document.querySelector('.locationtxt')
let city=locationtxt.innerHTML
let cityname = city.replace("市","");
cityname=cityname.replace("省","")
let tem=document.getElementById("txt-temperature")
let wea=document.getElementById("txt-weather")
let win=document.querySelector(".txt-win")
let humidity=document.querySelector(".txt-humidity")
let air=document.getElementById("til")
let tem_max=document.getElementById("temperature_max")
let daywea=document.getElementById("daywea")
let tomorrow_temperature_max=document.getElementById("tomorrow-temperature_max")
let tomorrowwea=document.getElementById("tomorrowwea")
let logo=document.querySelectorAll(".logo")
let weekData
let cityid
let timeData
let txtTime=document.querySelectorAll(".txt-time")
let lsHoursWeather=document.getElementById(".ls-hours-weather")
let timeimg=document.querySelectorAll(".iconh")
let txtDegree=document.querySelectorAll(".txt-degree")
let allweek=document.querySelectorAll(".day")
let week
let weatherData
let weekMatch=["星期一","星期二","星期三","星期四","星期五","星期六","星期天"]
let weekday=document.querySelectorAll(".date")
let flagWeek=0
let  weekweather=document.querySelectorAll(".weekweather")
let wea_img_d=document.querySelectorAll(".wea_img_d")
let wea_img_n=document.querySelectorAll(".wea_img_n")
let week_wind=document.querySelectorAll(".wind")
let ctPopWindow=document.querySelectorAll(".ct-pop-window")
let ctAqi=document.querySelector(".ct-aqi")
let dayair=document.querySelector(".air")
let iconClose=document.getElementById("icon-close")
let flagerr=0
iconClose.addEventListener("click",()=>{
    ctPopWindow[1].className="ct-pop-window hide"
})
ctAqi.addEventListener("click",()=>{
    ctPopWindow[1].className="ct-pop-window show"
})
function findweek(){
    for(let i=0;i<7;i++){
        if(week==weekMatch[i]){
            flagWeek=i
        }
        // console.log(allweek[i]);
    }
    for(let i=flagWeek;i<flagWeek+7;i++){
        allweek[i-flagWeek].innerHTML=weekMatch[i]
        // console.log(allweek[i]);
        if(i>=7){
            allweek[i-flagWeek].innerHTML=weekMatch[i-7]
            // console.log(allweek[i]);
        }
    }
}
console.log(txtTime[1].innerHTML);
function day_tom_img(x,y){
    if(x=="yun"){
        logo[0].src="./images/images/day/yun.png"
    }
    if(y=="yun"){
        logo[1].src="./images/images/day/yun.png"
    }
    if(x=="qing"){
        logo[0].src="/images/images/day/qing.png"
    }
    if(y=="qing"){
        logo[1].src="/images/images/day/qing.png"
    }
    if(x=="yin"|| y=="yin"){
        logo[1].src="/images/images/day/yin.png"
        logo[0].src="/images/images/day/yin.png"
    }
    if(x=="yu"||y=="yu"){
        logo[1].src=="/images/images/day/yu.png"
        logo[0].src=="/images/images/day/yu.png"
    }
}
function imgMatch(i){
    if(timeimg[i].id=="101"){
        timeimg[i].src="./images/images/day/yun.png"
    }
    if(timeimg[i].id=="151"){
        timeimg[i].src="/images/images/night/yun.png"
    }
    if(timeimg[i].id=="100"){
        timeimg[i].src="/images/images/day/qing.png"
    }
    if(timeimg[i].id=="105"){
        timeimg[i].src="/images/images/night/qing.png"
    }
    if(timeimg[i].id=="104"){
        timeimg[i].src="/images/images/day/yin.png"
    }
    if(timeimg[i].id>=300&&timeimg[i].id<=399){
        timeimg[i].src="/images/images/day/yu.png"
    }
}
function weekimg(i){
    if(wea_img_d[i-2].id=="yun"){
        wea_img_d[i-2].src="./images/images/day/yun.png"
    }
    if(wea_img_n[i-2].id=="yun"){
        wea_img_n[i-2].src="./images/images/night/yun.png"
    }
    if(wea_img_d[i-2].id=="qing"){
        wea_img_d[i-2].src="/images/images/day/qing.png"
    }
    if(wea_img_n[i-2].id=="qing"){
        wea_img_n[i-2].src="/images/images/night/qing.png"
    }
    if(wea_img_n[i-2].id=="yin"|| wea_img_d[i-2]=="yin"){
        wea_img_n[i-2].src="/images/images/day/yin.png"
        wea_img_d[i-2].src="/images/images/day/yin.png"
    }
    if(wea_img_n[i-2].id=="yu"||wea_img_d[i-2].id=="yu"){
        wea_img_n[i-2].src="/images/images/day/yu.png"
        wea_img_d[i-2].src="/images/images/day/yu.png"
    }
}

// import Chart from 'chart.js';
// var ctx = document.querySelector('.chartjs-render-monitor').getContext('2d');
// require(['path/to/chartjs/dist/Chart.js'], function(Chart){
//     // var myChart = new Chart(ctx, {...});
//     var chart = new Chart(ctx, {
//         // 要创建的图表类型
//         type: 'line',
        
//         // 数据集
//         data: {
//         labels: ["January", "February", "March", "April", "May", "June", "July"],
//         datasets: [{
//             label: "My First dataset",
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45],
//         }]
//         },
        
//         // 配置选项
//         options: {}
//         });
// });

// setInterval(() => {
//     if(win.style.opacity=="0"){
//         win.style.transform="translate(0px, 0px)"
//         humidity.style.transform="translate(0px, -10px)"
//         humidity.style.transition="0.5s"
//         humidity.style.opacity="0"
//         win.style.opacity="1"
        
//     }else{
//         humidity.style.transform="translate(0px, 0px)"
//         win.style.transform="translate(0px, -10px)"
//         win.style.transition="0.5s"
//         win.style.opacity="0"
//         humidity.style.opacity="1"
        
//     }
// }, 5000);
//搜索页
let secLoaction=document.getElementById("sec-loaction")
let btnCancel=document.getElementById("btn-cancel")
locationtxt.addEventListener("click",()=>{
    secLoaction.className="container show"
})
let history_city=document.querySelector(".history_city")
let hot_city=document.querySelectorAll(".hot_city")
let ct_hot_city=document.getElementById("ct-hot-city")
let iLocation=document.getElementById("i-location")
for(let i=0;i<hot_city.length;i++){
    hot_city[i].addEventListener("click",debounce(()=>{
        cityname =hot_city[i].innerHTML
        locationtxt.innerHTML=cityname
        dayweather_find()
        week_find()
        history_city_change(hot_city[i].innerHTML)
        secLoaction.className="container hide"
    },500))
}
function history_city_change(cityname){
    let historys=history_city.querySelectorAll("li")
    // console.log(historys.innerHTML);
    if(historys.length<3){
        let history1=document.createElement("li")
        history_city.appendChild(history1)
        history1.innerHTML=cityname
        history1.className="opt city"
        console.log(cityname);
        if(historys.length>=2){
            historys[1].className="opt city center"
        }
    }else{
        historys[2].innerHTML=historys[1].innerHTML
        historys[1].innerHTML=historys[0].innerHTML
        historys[0].innerHTML=cityname
    }
}
btnCancel.addEventListener("click",()=>{
    if(flagerr==1){
        alert("您是不是输错城市了？重新输入城市吧~")
        iLocation.value=""
        flagerr=0
    }else{
        history_city_change(cityname)
        secLoaction.className="container hide"
        flagerr=0
    }
})
iLocation.addEventListener("focus",()=>{
    ct_hot_city.style.display="none"
})
iLocation.addEventListener("blur",()=>{
    ct_hot_city.style.display="block"
})
iLocation.addEventListener("input",debounce(()=>{
    btnCancel.innerHTML="确认"
    locationtxt.innerHTML=iLocation.value
    cityname=iLocation.value
    dayweather_find()
    week_find()
    // console.log(iLocation.value);
},  1000))
//生活指数
let livinglevel=document.querySelectorAll(".content")
let livingData

//七日天气图

//防抖函数
function debounce(fn, delay) {
    // timer 是在闭包中的
    let timer = null;
    
    return function() {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}
//
let dayweather_find=()=>fetch('https://www.yiketianqi.com/free/day?appid=49563285&appsecret=44ctnstZ&unescape=1&city='+cityname)
  .then(response => response.text())
  .then(data => {
    weatherData=JSON.parse(data)
    cityid=weatherData.cityid
    timewea()
    living()
    week=weatherData.week
    console.log(week);
    findweek()
    week_find()
    tem.innerHTML=weatherData.tem
    wea.innerHTML=weatherData.wea
    win.innerHTML=weatherData.win+" "+weatherData.win_speed
    humidity.innerHTML="湿度 "+weatherData.humidity
    air.innerHTML=weatherData.air
    dayair.innerHTML=air.innerHTML
    tem_max.innerHTML=weatherData.tem_night+"/"+weatherData.tem_day
    daywea.innerHTML=wea.innerHTML
    flagerr=0
    console.log(weatherData);  // 打印响应数据到控制台
})
.catch(error => {
    // alert(error)
    console.error('Error:', error);
});
dayweather_find()
let week_find=()=>{fetch('https://www.yiketianqi.com/free/week?appid=49563285&appsecret=44ctnstZ&unescape=1&city='+cityname)
  .then(response => response.text())
  .then(data => {
    weekData=JSON.parse(data)
    for(let i=2;i<9;i++){
        // console.log(weekData.data[i-2].date);
        weekday[i].innerHTML=weekData.data[i-2].date
        weekday[i].innerHTML=weekday[i].innerHTML.replace("2023-","")
        weekweather[(i-2)*2].innerHTML=weekData.data[i-2].wea
        weekweather[(i-2)*2+1].innerHTML=weekData.data[i-2].wea
        wea_img_d[i-2].id=weekData.data[i-2].wea_img
        wea_img_n[i-2].id=weekData.data[i-2].wea_img
        week_wind[(i-2)*2].innerHTML=weekData.data[i-2].win
        week_wind[(i-2)*2+1].innerHTML=weekData.data[i-2].win_speed
        weekimg(i)
        console.log(weekData.data[i-2].wea);
    }
    tomorrow_temperature_max.innerHTML=weekData.data[1].tem_night+'/'+weekData.data[1].tem_day
    tomorrowwea.innerHTML=weekData.data[1].wea
    day_tom_img(weekData.data[0].wea_img,weekData.data[1].wea_img)
    weekday[2].innerHTML="今天"
    console.log(weekData);  // 打印响应数据到控制台
  })
  .catch(error => {
    flagerr=1
    console.error('Error:', error);
  });}
let timewea= ()=>{fetch('https://devapi.qweather.com/v7/weather/24h?location='+cityid+'&key=48295401a49c4f14b340b7a62178798b')
.then(response => response.text())
.then(data => {
    timeData=JSON.parse(data)
    for(let i=0;i<24;i++){
        txtTime[i].innerHTML=timeData.hourly[i].fxTime
        txtTime[i].innerHTML=txtTime[i].innerHTML.substring(11,16)
        txtDegree[i].innerHTML=timeData.hourly[i].temp
        timeimg[i].id=timeData.hourly[i].icon
        imgMatch(i)
    }
    // txtTime.innerHTML=timeData.hourly
console.log(timeData);  // 打印响应数据到控制台
})
.catch(error => {
console.error('Error:', error);
});}
let flaglive=[3,11,9,2,1,16,4,6,15,10,8,14,13,12,7,5]
let living=()=>{fetch('https://devapi.qweather.com/v7/indices/1d?type=3,11,9,2,1,16,4,6,15,10,8,14,13,12,7,5&location='+cityid+'&key=48295401a49c4f14b340b7a62178798b')
.then(response => response.text())
.then(data => {
    livingData=JSON.parse(data)
    for(let i=0;i<16;i++){
        livinglevel[i].innerHTML=livingData.daily[flaglive[i]-1].category
    }
console.log(livingData);  // 打印响应数据到控制台
})
.catch(error => {
console.error('Error:', error);
});}