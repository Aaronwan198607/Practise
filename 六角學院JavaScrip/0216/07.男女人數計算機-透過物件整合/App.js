let data = [
    {
        name: 'Tom',
        sex: "male",
    },
    {
        name: 'Merry',
        sex: "woman",
    },
    {
        name: 'Jason',
        sex: "male",
    },
    {
        name: 'joe',
        sex: "woman",
    },
    {
        name: 'Sam',
        sex: "mele",
    }
];
let people = {
    male: 0,
    women:0,
};
//將物件中每筆陣列裡的數值宣告初始值
data.forEach(function (item, index) {
    // console.log(item);(確認所下的函式使否有成功抓資料)
    if (item.sex == "woman") {
        people.women += 1;
    } else {
        people.male += 1;
    }
});
console.log(people);
