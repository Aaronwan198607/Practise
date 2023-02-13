const btn = document.querySelector('.btn');
const title = document.querySelector('h1');
console.log(btn, title);
let count = 0;
//宣告count為數字0,
// 不將let count = 0 放入function中
//是因可以持續宣告不因為函示執行一次而消失宣告

//監聽事件
btn.addEventListener('click', function (e) {
    //addEventListener=>增加監聽事件函示
    console.log(count);
    //監聽點擊按鈕觸發count變數,將數字做加總顯示在console
    count += 1;
    title.innerHTML = count;
    //修改title變數h1標籤
});
