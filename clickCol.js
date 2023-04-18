

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

function getRandom(x){
    return Math.floor(Math.random()*x)+1;
};

button2.addEventListener("click" , function(){
    let guess = input2.value;
    let answer = getRandom(100);

      
    });


