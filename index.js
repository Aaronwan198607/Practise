// const link = document.querySelector("a");
// console.log(link);

// link.addEventListener("click", (e) => {
//     e.preventDefault();
//     //preventDefault 取消默認值執行行為不跳轉網址
//     console.log("hello");
//     document.querySelector("h1").textContent = '不轉換網址';
// })

let data=[10,20,30,40,50];
let total=0
let newData=[];
data.forEach(function(item){
    //執行5次forEach迴圈
    if(item%2 ===0)
    total+=1;
    newData.push(total)
    //加總陣列數值
        console.log(newData);
})
    console.log(newData);
    //符合偶數並執行+1回傳新陣列
 console.log(total);
 //執行次數