const link = document.querySelector("a");
console.log(link);

link.addEventListener("click", (e) => {
    e.preventDefault();
    //preventDefault 取消默認值執行行為不跳轉網址
    console.log("hello");
    document.querySelector("h1").textContent = '不轉換網址';
})