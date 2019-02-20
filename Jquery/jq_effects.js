$(document).ready(function() {
    // $("#fadeIn").click(fadeInEffect);
    // $("#fadeOut").click(fadeOutEffect);
    // $("#fadeToggle").click(fadeToggleEffect);

    // $("#hide").click(hideEffect);
    // $("#show").click(showEffect);
    // $("#toggle").click(toggleEffect);

    $("#slideOut").click(slideOutEffect);
    $("#slideIn").click(slideInEffect);
    $("#slideToggle").click(slideToggleEffect);
});

function fadeInEffect() {
    $(".data").fadeIn();
}

function fadeOutEffect() {
    $(".data").fadeOut();
}

function fadeToggleEffect() {
    $(".data").fadeToggle();
}

function hideEffect() {
    $(".data").hide(1000);
}

function showEffect() {
    $(".data").show(1000);
}

function toggleEffect() {
    $(".data").toggle(1000);
}

function slideInEffect() {
    $(".data").slideUp(1000);
}

function slideOutEffect() {
    $(".data").slideDown(1000);
}

function slideToggleEffect() {
    $(".data").slideToggle(1000);
}