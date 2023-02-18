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
    console.log(str);
  });

  list.innerHTML = str;
  //NOTE:在將content內的變數資料選染在HTML上
}
init();
