$(document).ready(function() {
    var f_num = $("#num_1");
    var s_num = $("#num_2");
    $("button").on("click", function() {
        var opr = $(this).html();
        var expression = f_num.val() + opr + s_num.val();
        var result = eval(expression);
        $("#result").val(result);
    });
});