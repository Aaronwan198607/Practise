const account = document.querySelector(".account");
const password = document.querySelector(".password");
const send = document.querySelector(".send");


console.log(account, password, send);
send.addEventListener('click', function (e) {
    // console.log('按鈕有回應');
    callSingUp()
    //TODO:監聽click事件,並執行callSingUp函式
})
  
function callSingUp() {
    if (account.value == "" || password.value == "")
    //POINT:如果account ||(或) password的數值為空字串
    {
        alert("請輸入正確資訊");
        //POINT:系統跳出提示視窗
        return;
        //POINT:並終止程式不往下執行
    }

    let obj = {}
    obj.email = account.value;
    obj.password = password.value;
    console.log(obj); //POINT:確認是否有印出input輸入的值
    //NOTE:為了避免使用者沒有輸入帳號密碼,在上方先做if 的判斷


    // let obj = {
    //     email: 'kkk1234@gmail.com',
    //     password: '12345'
    // }
    //TODO:宣告物件內容,格是必須符合API物件的格式內容
    //TODO:將上一章節測試的POST請求代碼帶入,送出axios網路請求
   
    axios.post("h ttps://hex-escape-room.herokuapp.com/api/user/signup", obj)
      .then(function (response) {
        // console.log(response);
        //NOTE:console.log無法提示使用者是否註冊成功
        //   alert(response.data.message); //TODO:第一種方式
        //因為知道response.data.message發出的訊息內容,就此可增加判斷(不想使用系統設定的內容的話)
          
        //TODO:第二種方式  
          if (response.data.message == "帳號註冊成功") {
              alert("恭喜您帳號已經註冊成功囉!!")
          } else {
              alert("您輸入的帳號已被其他人使用,再重新輸入一個E-mail吧!!")
          }
          account.value = "";
          password.value = "";
          //還原為預設的空字串
      })
          
      .catch(function (error) {
        console.log(error);
      });
}