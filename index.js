const btn = document.querySelector('.btn');
const title = document.querySelector('h1');
console.log(btn,title);

//監聽事件
btn.addEventListener('click', function (e) {
    //addEventListener=>增加監聽事件函示
    console.log("click");
    //往下執行修改文字的程序
    title.textContent = "因按鈕點及觸發修改文字";
});

//另一種寫法 ↓ (但容易搞混,建議用上一個方式撰寫)

document.querySelector('.btn').addEventListener('click', function (e) {
    console.log("click");
});