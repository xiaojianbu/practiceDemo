$(function() {
    var flag = false;
    $("button").click(function() {
        if (!flag) {
            flag = true;
            $(".info").css('display', 'block');
        } else {
            flag = false;
            $(".info").css('display', 'none');
        }
    });
    $(".close").click(function() {
        flag = false;
        $(".info").css('display', 'none');
    });
});
