$(function() {
    $("button:eq(0)").click(function() {
        var name = $("input:eq(0)").val();
        var value = $("input:eq(1)").val();
        $(".demo").css(name, value);
    });

    $("button:eq(1)").click(function() {
        $(".demo").removeAttr('style');
    });
});
