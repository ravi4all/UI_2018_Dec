window.addEventListener("load", initEvents);
var num_1;
var num_2;

function initEvents() {
    num_1 = document.getElementById("num_1");
    num_2 = document.getElementById("num_2");

    var btns = document.getElementsByTagName("button");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", calc);
    }
}

function calc() {
    // console.log(event);
    // console.log(event.srcElement);
    var opr = event.srcElement.innerHTML;
    // console.log(opr);
    var expression = parseInt(num_1.value) + opr + parseInt(num_2.value);
    // console.log(expression);
    var result = eval(expression);
    document.getElementById("result").value = result;
}

function sayHello(obj) {
    console.log("Blur Called...", obj);
}