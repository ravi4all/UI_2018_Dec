window.addEventListener("load", initEvents);
var username;
var email;
var pwd;
var c_pwd;

function initEvents() {
    username = document.querySelector("#box_1");
    email = document.querySelector("#box_2");
    pwd = document.querySelector("#box_3");
    c_pwd = document.querySelector("#box_4");

    username.addEventListener("blur", checkblank);
    email.addEventListener("keyup", checkEmail);
    pwd.addEventListener("keyup", passwordStrength);
}

function checkblank() {
    // console.log("Checking Text Box");
    var val = username.value;
    var span = document.querySelector("#err_1");
    // Truthy and Falsy - NaN, undefined, null, 0, "";
    if (val) {
        // console.log("Inside if and Value is", val);
        span.innerHTML = "";
    } else {
        // console.log("Inside Else and Value is", val);
        span.innerHTML = "Please fill this field";
    }
}

function passwordStrength() {
    var span = document.querySelector("#err_3");
    var span_2 = document.querySelector(".strength");
    // span.innerHTML = event.srcElement.value;
    span_2.style.width = pwd.value.length * 5 + 'px';
    var pswrdValue = pwd.value;
    if (pswrdValue.length > 0 && pswrdValue.length <= 4) {
        span.innerHTML = "Weak Password";
        span.style.color = 'red';
        span_2.style.backgroundColor = 'red';
    } else if (pswrdValue.length > 4 && pswrdValue.length <= 8) {
        span.innerHTML = "Average Password";
        span.style.color = 'orange';
        span_2.style.backgroundColor = 'yellow';
    } else if (pswrdValue.length > 8) {
        span.innerHTML = "Strong Password";
        span.style.color = 'green';
        span_2.style.backgroundColor = 'green';
    } else {
        span.innerHTML = "";
        span_2.style.backgroundColor = '';
    }
}

function checkEmail() {
    var pattern = /([a-z | 0-9])\w+[@]\w+[.]\w{2,3}/;
    var bool = pattern.test(email.value);
    var span = document.querySelector("#err_2");
    // console.log(bool, email.value);
    if (bool) {
        span.innerHTML = "";
    } else {
        span.innerHTML = "Invalid Pattern";
    }
}