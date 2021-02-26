/*let liveServer = require("live-server")
let params = {
    port: 8080,
    host: "127.0.0.1",
    file: "home.html"
}
liveServer.start(params)
// nodemon index.js*/
function formValidation() {
  let Nname = document.forms['regForm']['name'];
  let Eemail = document.forms['regForm']['email'];
  let Hhow = document.forms['regForm']['find-us'];
  let Nnews = document.forms['regForm']['news'];
  let Mmessage = document.forms['regForm']['message'];

  if (Nname.value === '') {
    window.alert('please enter your name');
    Nname.focus();
    return false;
  }
  if (Eemail.value === '') {
    window.alert('please enter your email');
    Eemail.focus();
    return false;
  }
  /* if(Hhow.selectedIndex < 1){
        window.alert("please select how you found us")
  Hhow.focus()
    return false
    }
    
    if(Mmessage.value === ""){
        window.alert("please tell us something")
  Mmessage.focus()
    return false
    }
   */
}
