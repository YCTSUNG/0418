

// const title = document.getElementById("title");
// const input = document.querySelector("#input");
// const button = document.querySelector(".btn"); //#抓id .抓class 什麼都不加→抓標籤


// // let amount = 0;
// button.addEventListener("click" , function(){
//     // amount +=1;
//     // title.innerText = amount;
//     // console.log(amount);
//     const num = input.value;
//     title.innerText = num ;
//     input.value = 0;

// });

const title2 = document.getElementById("title2");
const rangeleft = document.querySelector("#rangeleft");
const rangeright = document.querySelector("#rangeright");
const input2 = document.querySelector("#input2");
const button2 = document.querySelector(".btn2");

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

let random = getRandom(1,10);
while(true){
 let num = prompt("你來猜呀");
 if(num>random){
    alert("你太大了!");
 } else if(num<random){
    alert("你太小了!");
 } else{
    alert("你好帥呀!");
 }
}

