$(document).ready(function() {
    $("#box_1").click(function() {
        $("body").css('backgroundColor', '#fdd');
        $("#box_1").css('backgroundColor', '#f00');
        $("#box_1 div").css('backgroundColor', '#fff');
        $("#box_2").css('backgroundColor', '#0f0');
        $("#box_2 div").css('backgroundColor', '#0f0');
        $("#box_3").css('backgroundColor', '#000');
        $("#box_3 div").css('backgroundColor', '#000');
        $("li").css('backgroundColor', '#f00');
    });

    $("#box_2").click(function() {
        $("body").css('backgroundColor', '#a3c5a8');
        $("#box_2").css('backgroundColor', '#0f0');
        $("#box_2 div").css('backgroundColor', '#fff');
        $("#box_1").css('backgroundColor', '#f00');
        $("#box_1 div").css('backgroundColor', '#f00');
        $("#box_3").css('backgroundColor', '#000');
        $("#box_3 div").css('backgroundColor', '#000');
        $("li").css('backgroundColor', '#0f0');
    });

    $("#box_3").click(function() {
        $("body").css('backgroundColor', '#ccc');
        $("#box_3").css('backgroundColor', '#000');
        $("#box_3 div").css('backgroundColor', '#fff');
        $("#box_2").css('backgroundColor', '#0f0');
        $("#box_2 div").css('backgroundColor', '#0f0');
        $("#box_1").css('backgroundColor', '#f00');
        $("#box_1 div").css('backgroundColor', '#f00');
        $("li").css('backgroundColor', '#000');
    });
});
