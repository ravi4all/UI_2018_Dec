// Event Binding
// window.addEventListener("load", function() {
//     document.getElementById("btn").addEventListener('click', showUser);
// })

window.addEventListener("load", initEvents);

function initEvents() {
    console.log("Init Events Called...");
    document.getElementById("btn").addEventListener('click', showUser);
}

function showUser() {
    console.log("Show User Called...");
    userName = document.getElementById("name");
    document.getElementById("output").innerHTML = userName.value;
}