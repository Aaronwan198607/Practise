

// const linkOne = document.querySelector('a');
// console.log(linkOne);
// linkOne.setAttribute("href", "www.yahoo.com.tw");

const boxColor=document.querySelector('.box');
console.log(boxColor);
boxColor.setAttribute("style", "background-color:red");

//setAttribute()可修改標籤內中之屬性質


const yahooColor=document.querySelector("a");
console.log(yahooColor);
yahooColor.setAttribute("class","yahooColor");

//新增標籤內之選擇棄並命名為yahooColor

const linkName=document.querySelectorAll('a');
console.log(linkName);

//.querySelectorAll()可選取相同標籤屬性，會以陣列的方式做選取

linkName[1].setAttribute("class", "red");
//選取單一陣列的物件在[]內中填入陣列的順序




