// const main = document.querySelector('.main');
// // main.innerHTML = 
// console.log(main);
// main.innerHTML = `<h1 class="header">標題</h1>`;

// //使用反引號原因是因為反引號可以插入字串及變數,
// //也比較不會和'' & " " 讓系統判讀不到

// const list=document.querySelector('.list');
// console.log(list);
// let myLink = "http://www.yahoo.com.tw/";
// let linkName="Yahoo網站連結"
// let content = `<li><a href="${myLink}">${linkName}</a></li>`;

// list.innerHTML = content + content;
// //字串相加,可以再次增加content內的變數



const mainText = document.querySelector("p");
console.log("hello");
mainText.textContent = "HELLO2";

const main2=document.querySelector(".main2");
console.log("main2");
main2.innerHTML = "<h1>HELLO2222</h1>";
let link=`<a href=http://www.yahoo.com.tw/>LINK</a>`;
main2.innerHTML = link;
main2.textContent = "link1111";


