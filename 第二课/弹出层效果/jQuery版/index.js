$(function() {
    $("button").click(function() {
        $("#overlay").css('display', 'block');
        $("#win").css('display', 'block');
    });

    $(".close").click(function() {
        $("#overlay").css('display', 'none');
        $("#win").css('display', 'none');
    });
});
