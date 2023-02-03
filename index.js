
const el =document.querySelector('h1');
//宣告一個el的變數,賦予一個值給el,
//dom的一個節點(document.querySelector), 裡面的選擇器中h1的選擇器
el.textContent = "修改el內的文字";

document.querySelector('h1').textContent = "把文字修改回來";
