window.addEventListener("load", initEvent);
var div;

function initEvent() {
    div = document.querySelector("#div_1");
    div.addEventListener("mousemove", anim);
    window.addEventListener("scroll", scrollAnim);
}

function anim() {
    // console.log(event);
    var mouse_x = event.clientX;
    var mouse_y = event.clientY;
    // console.log(mouse_x, mouse_y);
    div.style.backgroundPosition = mouse_x * 0.2 + 'px' + " " + mouse_y * 0.2 + 'px';
}

function scrollAnim() {
    // console.log(window.scrollY);
    var scrollY = window.scrollY;
    var img_1 = document.querySelector("#section_1 img");
    var img_2 = document.querySelector("#section_2 img");
    if (scrollY > 350) {
        img_1.className = 'animate';
        img_2.className = 'animate';
        // img_1.style.transform = 'translateX(0%)';
        // img_2.style.transform = 'translateX(0%)';
    } else {
        img_1.className = '';
        img_2.className = '';
        // img_1.style.transform = 'translateX(-200%)';
        // img_2.style.transform = 'translateX(200%)';
    }
}