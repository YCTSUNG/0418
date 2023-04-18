console.log("first js");

let name = "Jack";

console.log(name);


let a = 0


if(a<0){
    console.log("T")
}else if(a>0){
    console.log("F")
}else 
    console.log("C")



    let sum=0;
    for(let c =0;c<=1000;c+=2){
        sum+=c
    }
    console.log(sum);

    let arr=[10,20,30,40,50,60];

    for(let i=0; i < arr.length; i++){
        console.log(arr[i]);
    }


    //回呼
    arr.forEach(
        function(i){
             console.log(i);
        }
    );

    let arr2=[10,20,30,40,50,60,70,80,90];
    //Filter
    const filterArr = arr2.filter(function(i){
        return i%20 == 0
    });
    
    console.log(filterArr)

    //Map
    const mapArr = arr2.map(function(i){
        return i+1
    })
    console.log(mapArr);


  let array=[];
  for(let i=0;i<=1000;i++) {
    array.push(i)
    };

  console.log(array);


  const filterArray = array.filter(function(i){
    return i%2 == 0
  })
 
  console.log(filterArray)

  const mapArray = array.map(function(i){
    return i-3
  })
  console.log(mapArray)



    //宣告方法/函式
    function aa(){
         console.log("XX")
    };

    aa();

