window.addEventListener("load", initEvents);
var num_1;
var num_2;

function initEvents() {
    num_1 = document.getElementById("num_1");
    num_2 = document.getElementById("num_2");

    document.getElementById("add").addEventListener("click", add);
    document.getElementById("sub").addEventListener("click", sub);
    document.getElementById("div").addEventListener("click", div);
}

function add() {
    var result = parseInt(num_1.value) + parseInt(num_2.value);
    document.getElementById("result").value = result;
}

function sub() {
    var result = parseInt(num_1.value) - parseInt(num_2.value);
    document.getElementById("result").value = result;
}

function div() {
    var result = parseInt(num_1.value) / parseInt(num_2.value);
    document.getElementById("result").value = result;
}