let data = [
  {
    Charge: "免費",
    name: "廖洧杰充電站",
  },
  {
    Charge: "投幣式",
    name: "小花充電站",
  },
  {
    Charge: "投幣式",
    name: "小明充電站",
  },
  {
    Charge: "投幣式",
    name: "小天充電站",
  },
];

function init(){
  const list = document.querySelector(".list");
  // console.log(list);
  let str = "";
  data.forEach(function (item, index) {
    let contens = `<li>${item.name},${item.Charge}</li>`;
    //NOTE:在此要先consol.log(contens),確認是否正常顯示
    str += contens;
    // console.log(str);
  });

  list.innerHTML = str;
  //NOTE:在將content內的變數資料選染在HTML上
}
init();

const filter = document.querySelector(".filter");
console.log(filter);
filter.addEventListener("click", (e) => {
    //   console.log(e.target.value==undefined);
    //NOTE:加上unfefined主要是因為div區塊較廣,點到旁邊的位置會顯示undifine
    //NOTE:為了判斷是不是確實有點到按鈕,而不是因觸發倒不是按鈕的區塊
    if (e.target.value == undefined) {
        console.log('不是點到按鈕而點到其他的地方了!!');
        return;
        //POINT:終止函式執行,不跑後續的邏輯程式
    }


    let str = "";
    data.forEach(function (item, index) {

        console.log(e.target.value == item.Charge);
        //NOTE:確認點擊的按鈕有對應到物件裡面的資料,將其consol.log出來

        if (e.target.value == "全部") {
            //POINT:設定新的名稱叫"全部"
        str += `<li>${item.name},${item.Charge}</li>`;
        
    }else if (e.target.value == item.Charge) {
        str += `<li>${item.name},${item.Charge}</li>`;
        //POINT:NOTE:將#47宣告的變數str賦予值
        console.log(str);
      }
    })
    const list = document.querySelector('.list');
    list.innerHTML = str;
 //POINT:重新賦予值時innerHTML會清空ˋ物件值並重新將字串#52行帶入
});
