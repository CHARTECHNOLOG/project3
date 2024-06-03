function auth() {
  var email = document.forms["myform"]["uemail"].value;
  var pass = document.forms["myform"]["pass"].value;
  if (email == "samson@gmail.com" && pass == "123456") {
    window.location.href = "home.html";
    alert("Login Successfully");
  } else {
    alert("Wrong Credientials");
  }
}
