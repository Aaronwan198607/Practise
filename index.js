const main = document.querySelector('.main');
// main.innerHTML = 
console.log(main);
main.innerHTML = `<h1 class="header">標題</h1>`;

//使用反引號原因是因為反引號可以插入字串及變數,
//也比較不會和'' & " " 讓系統判讀不到

const list = document.querySelector('.list');
console.log(list);


list.innerHTML='<li><a href="http://www.google.com.tw">Google的連結</a></li>';

