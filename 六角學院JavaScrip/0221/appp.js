
//url: https://github.com/hexschool/nodejs_ajax_tutorial

let obj = {
  email: "hello12374@gmail.com",
  password: "123456278",
}
axios.post("https://hex-escape-room.herokuapp.com/api/user/signup", obj)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });